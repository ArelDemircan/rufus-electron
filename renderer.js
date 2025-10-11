const isoInput = document.getElementById('isoPath');
const btnChooseIso = document.getElementById('btnChooseIso');
const btnFlash = document.getElementById('btnFlash');
const drivesSel = document.getElementById('drives');
const btnRefresh = document.getElementById('btnRefresh');
const btnUnmount = document.getElementById('btnUnmount');
const fill = document.getElementById('fill');
const progressText = document.getElementById('progressText');
const logBox = document.getElementById('log');

function log(msg){ logBox.textContent += msg + "\\n"; logBox.scrollTop = logBox.scrollHeight; }

async function refresh(){
  drivesSel.innerHTML = "<option>Yükleniyor...</option>";
  const drives = await window.api.listDrives();
  drivesSel.innerHTML = '';
  drives.forEach(d=>{
    const opt=document.createElement('option');
    opt.value=d.device;
    opt.textContent=`${d.device} — ${d.description || ''} ${d.isRemovable ? '(USB)' : ''}`;
    drivesSel.appendChild(opt);
  });
}

btnChooseIso.onclick = async ()=>{ 
  const iso = await window.api.chooseIso(); 
  if(iso) isoInput.value=iso; 
};

btnRefresh.onclick = refresh;
btnUnmount.onclick = async ()=>{ 
  const dev=drivesSel.value; 
  if(!dev) return alert('Cihaz seçin');
  const res=await window.api.unmountDevice(dev);
  alert(JSON.stringify(res)); 
};

btnFlash.onclick = async ()=>{
  const iso=isoInput.value.trim(), dev=drivesSel.value;
  if(!iso||!dev) return alert('ISO ve cihaz seçin!');
  if(!confirm(`Tüm veriler silinecek! ${dev} diske yazmak istiyor musun?`)) return;
  btnFlash.disabled=true; fill.style.width='0%'; progressText.textContent='Başlıyor...';
  try{
    await window.api.flashIso({isoPath:iso, device:dev});
    progressText.textContent='Bitti!';
    fill.style.width='100%';
    alert('Yazma tamamlandı!');
  }catch(e){
    log('Hata: '+e.message);
    alert('Hata: '+e.message);
  }finally{
    btnFlash.disabled=false;
  }
};

window.api.onProgress(p=>{
  const pct=Math.round(p.percentage||0);
  fill.style.width=pct+'%';
  progressText.textContent=`${pct}% (${(p.transferred/1024/1024).toFixed(1)} MB)`;
});

refresh();
