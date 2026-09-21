const DEFAULT={name:'Ceren',gender:'female',role:'Hakim',coins:480,xp:4820,level:18,currentLevel:3,completed:[1,2],stars:{1:3,2:3},solved:3};
const DATA={
1:[['HAK','Kişiye hukuk düzenince tanınan ve korunan yetki.'],['DAVA','Bir hakkın mahkeme önünde ileri sürülmesi.'],['BORÇ','Bir edimi yerine getirme yükümlülüğü.'],['KAST','Fiilin bilerek ve istenerek gerçekleştirilmesi.'],['DELİL','Bir vakıanın doğruluğunu ispata yarayan araç.'],['TANIK','Uyuşmazlığa ilişkin bilgisini mahkemeye aktaran kişi.']],
2:[['MÜLKİYET','Bir eşya üzerinde kullanma, yararlanma ve tasarruf yetkisi sağlayan ayni hak.'],['TEMERRÜT','Borçlunun muaccel borcunu zamanında ifa etmemesiyle ortaya çıkan durum.'],['ZİLYETLİK','Bir eşya üzerinde fiili hakimiyet kurulması.'],['TAKSİR','Dikkat ve özen yükümlülüğüne aykırılıkla neticeye sebep olma.'],['İPOTEK','Taşınmaz üzerinde kurulan sınırlı ayni teminat hakkı.'],['TEMYİZ','Bir kararın üst mahkemede hukuka uygunluk yönünden incelenmesini isteyen kanun yolu.']],
3:[['FERAGAT','Bir hak veya talep sonucundan vazgeçme.'],['KEFALET','Bir borcun ifasını güvence altına alan kişisel teminat sözleşmesi.'],['HACİZ','Borçlunun malvarlığı değerlerine icra yoluyla el konulması.'],['MİRAS','Ölen kişinin malvarlığının hukuki haleflerine geçmesi.'],['TEBLİGAT','Hukuki işlemin ilgilisine usulüne uygun bildirilmesi.'],['İBRA','Borçlunun borçtan kurtarılması.']]
};
function load(){return {...DEFAULT,...JSON.parse(localStorage.getItem('muhur-ui-state')||'{}')}}
function save(s){localStorage.setItem('muhur-ui-state',JSON.stringify(s))}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function norm(x){return String(x).toLocaleUpperCase('tr-TR').replace(/[^A-ZÇĞİÖŞÜI]/g,'')}
window.MuhurUI={DEFAULT,DATA,load,save,esc,norm};