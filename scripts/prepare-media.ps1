# BaliOn — 미디어 파일 준비 스크립트
# public/videos/ 에 파일을 넣은 후 실행하세요:
#   powershell -ExecutionPolicy Bypass -File scripts/prepare-media.ps1

$root = Split-Path -Parent $PSScriptRoot
$vdir = Join-Path $root "public\videos"

Write-Host "`n[BaliOn] 미디어 파일 준비 중..." -ForegroundColor Cyan

# 1. 파일명 변경
$renames = @{
    "Bundaran 3.mp4"   = "atv.mp4"
    "0524(6).MP4"      = "paragliding.mp4"
}
foreach ($src in $renames.Keys) {
    $srcPath = Join-Path $vdir $src
    $dstPath = Join-Path $vdir $renames[$src]
    if (Test-Path $srcPath) {
        if (-not (Test-Path $dstPath)) {
            Rename-Item $srcPath $renames[$src]
            Write-Host "  ✓ $src → $($renames[$src])" -ForegroundColor Green
        } else {
            Write-Host "  - $($renames[$src]) 이미 존재" -ForegroundColor Yellow
        }
    }
}

# 2. fpvdrone 파일 → drone.mov
$droneFile = Get-ChildItem $vdir -Filter "fpvdrone*" | Select-Object -First 1
if ($droneFile) {
    $droneMov = Join-Path $vdir "drone.mov"
    if (-not (Test-Path $droneMov)) {
        Rename-Item $droneFile.FullName "drone.mov"
        Write-Host "  ✓ $($droneFile.Name) → drone.mov" -ForegroundColor Green
    }
}

# 3. MOV → MP4 변환
$droneMov = Join-Path $vdir "drone.mov"
$droneMp4 = Join-Path $vdir "drone.mp4"
if ((Test-Path $droneMov) -and (-not (Test-Path $droneMp4))) {
    Write-Host "`n  ffmpeg 변환 중 (drone.mov → drone.mp4)..." -ForegroundColor Cyan
    # ffmpeg 경로 탐색
    $ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
    if (-not $ffmpeg) {
        $candidates = @(
            "C:\ffmpeg\bin\ffmpeg.exe",
            "C:\Program Files\ffmpeg\bin\ffmpeg.exe",
            "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\Gyan.FFmpeg*\ffmpeg*\bin\ffmpeg.exe"
        )
        foreach ($c in $candidates) {
            $found = Resolve-Path $c -ErrorAction SilentlyContinue
            if ($found) { $ffmpeg = $found; break }
        }
    }
    if ($ffmpeg) {
        & $ffmpeg -i $droneMov -vcodec h264 -acodec aac -movflags +faststart $droneMp4 -y
        Write-Host "  ✓ drone.mp4 변환 완료" -ForegroundColor Green
    } else {
        Write-Host "  ✗ ffmpeg를 찾을 수 없습니다. 수동으로 실행하세요:" -ForegroundColor Red
        Write-Host "    ffmpeg -i public/videos/drone.mov -vcodec h264 -acodec aac public/videos/drone.mp4" -ForegroundColor Yellow
    }
} elseif (Test-Path $droneMp4) {
    Write-Host "  - drone.mp4 이미 존재" -ForegroundColor Yellow
}

# 4. 최종 상태 출력
Write-Host "`n[완료] public/videos/ 파일 목록:" -ForegroundColor Cyan
Get-ChildItem $vdir | ForEach-Object { Write-Host "  - $($_.Name)" }
Write-Host ""
