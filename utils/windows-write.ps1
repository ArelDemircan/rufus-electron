param(
  [string]$IsoPath,
  [string]$DevicePath
)
$chunkSize = 4MB
$buffer = New-Object byte[] $chunkSize
$fsIn = [System.IO.File]::Open($IsoPath, [System.IO.FileMode]::Open)
$fsOut = [System.IO.File]::Open($DevicePath, [System.IO.FileMode]::Open)
$total = $fsIn.Length
$written = 0
while (($read = $fsIn.Read($buffer,0,$buffer.Length)) -gt 0) {
  $fsOut.Write($buffer,0,$read)
  $written += $read
  $p = [int](($written/$total)*100)
  Write-Output (ConvertTo-Json @{percentage=$p;transferred=$written;length=$total})
}
$fsOut.Close(); $fsIn.Close()
