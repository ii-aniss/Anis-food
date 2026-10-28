const CUR='DA';
const bg={'Fast food':'#e8452c','Chiwaa':'#ffc933','Desserts':'#ff9fb5','Drinks':'#7fcfc3'};
const menu=[
 ['Fast food','Cheeseburger','450','burger','Beef patty, cheese, lettuce and house sauce.'],
 ['Fast food','Chicken tacos','500','burger','Grilled chicken, fries and cheese sauce in a pressed wrap.'],
 ['Fast food','Crispy chicken sandwich','480','burger','Fried chicken fillet with pickles and mayo.'],
 ['Fast food','Fries','150','fries','Hot and salted. Add cheese sauce for a little extra.'],
 ['Fast food','Margherita pizza','700','pizza','Tomato sauce, mozzarella and fresh basil.'],
 ['Fast food','Chicken pizza','850','pizza','Grilled chicken, peppers, olives and cheese.'],
 ['Chiwaa','Merguez','450','skewer','Spicy lamb sausage grilled over charcoal.'],
 ['Chiwaa','Chicken skewers','650','skewer','Marinated in lemon, garlic and paprika.'],
 ['Chiwaa','Mixed chiwaa plate','1500','platter','Merguez and chicken skewers with salad, fries and bread.'],
 ['Desserts','Chocolate crêpe','300','pastry','Warm crêpe filled with chocolate spread.'],
 ['Desserts','Ice cream cup','250','icecream','Three scoops with a sauce of your choice.'],
 ['Desserts','Baklava','350','pastry','Layered pastry with nuts and honey.'],
 ['Desserts','Makroud','250','pastry','Date-filled semolina diamonds.'],
 ['Drinks','Cola','150','cola','Ice-cold, served with a straw.'],
 ['Drinks','Lemonade','200','glass','Pressed lemon with a little anise.'],
 ['Drinks','Orange juice','250','glass','Fresh squeezed.'],
 ['Drinks','Mint tea','150','tea','Green tea with fresh mint.']
];
const art={
 burger:'<path d="M80 70Q80 28 150 28Q220 28 220 70Z" fill="#f2b04a"/><g fill="#fff3d0"><circle cx="118" cy="46" r="3"/><circle cx="150" cy="38" r="3"/><circle cx="182" cy="46" r="3"/></g><rect x="76" y="74" width="148" height="10" rx="5" fill="#5a9a3a"/><rect x="82" y="86" width="136" height="14" rx="7" fill="#6b3418"/><path d="M80 104H220Q220 124 150 124Q80 124 80 104Z" fill="#f2b04a"/>',
 fries:'<g fill="#ffd34d"><rect x="116" y="26" width="10" height="50" rx="3"/><rect x="132" y="18" width="10" height="58" rx="3"/><rect x="148" y="24" width="10" height="52" rx="3"/><rect x="164" y="16" width="10" height="60" rx="3"/><rect x="180" y="28" width="10" height="48" rx="3"/></g><path d="M106 70H198L188 126H116Z" fill="#fff"/><path d="M106 70H198L196 84H108Z" fill="#1c1a17"/>',
 pizza:'<circle cx="150" cy="72" r="54" fill="#f2b04a"/><circle cx="150" cy="72" r="46" fill="#d9472b"/><circle cx="150" cy="72" r="40" fill="#ffe08a" opacity=".9"/><circle cx="130" cy="58" r="8" fill="#9c2418"/><circle cx="168" cy="64" r="8" fill="#9c2418"/><circle cx="148" cy="88" r="8" fill="#9c2418"/><circle cx="172" cy="90" r="5" fill="#3f7d3a"/><circle cx="124" cy="84" r="5" fill="#3f7d3a"/>',
 skewer:'<path d="M50 114L250 38" stroke="#1c1a17" stroke-width="5" stroke-linecap="round"/><circle cx="95" cy="96" r="16" fill="#8a4a22"/><circle cx="130" cy="83" r="16" fill="#b8652f"/><circle cx="165" cy="70" r="16" fill="#8a4a22"/><circle cx="200" cy="56" r="16" fill="#b8652f"/><path d="M110 128q-6-8 0-16M150 128q-6-8 0-16M190 128q-6-8 0-16" stroke="#e8452c" stroke-width="3" fill="none" stroke-linecap="round"/>',
 platter:'<ellipse cx="150" cy="96" rx="100" ry="24" fill="#fff"/><ellipse cx="150" cy="92" rx="78" ry="16" fill="#f1e8d2"/><rect x="100" y="64" width="100" height="14" rx="7" fill="#8a4a22" transform="rotate(-8 150 71)"/><rect x="104" y="80" width="92" height="14" rx="7" fill="#b8652f" transform="rotate(5 150 87)"/><circle cx="208" cy="88" r="9" fill="#3f7d3a"/>',
 pastry:'<path d="M80 112L150 40L220 112Z" fill="#d79a3a"/><path d="M104 112L150 66L196 112Z" fill="#f2c36b"/><g fill="#7ab648"><circle cx="150" cy="82" r="5"/><circle cx="136" cy="96" r="4"/><circle cx="164" cy="96" r="4"/></g><path d="M80 112H220" stroke="#1c1a17" stroke-width="5"/>',
 icecream:'<circle cx="134" cy="64" r="17" fill="#f7d9b3"/><circle cx="166" cy="64" r="17" fill="#ff5f86"/><circle cx="150" cy="46" r="17" fill="#fff6e0"/><path d="M116 78H184L172 122H128Z" fill="#fff"/><path d="M116 78H184" stroke="#1c1a17" stroke-width="4"/>',
 glass:'<path d="M118 36H182L174 118H126Z" fill="#f6d84a"/><path d="M118 36H182" stroke="#1c1a17" stroke-width="4"/><circle cx="148" cy="60" r="9" fill="#fff" opacity=".5"/><path d="M168 36L184 8" stroke="#e8452c" stroke-width="5" stroke-linecap="round"/>',
 tea:'<path d="M122 50H178L170 118H130Z" fill="#9bd36b"/><path d="M122 50H178" stroke="#1c1a17" stroke-width="4"/><path d="M178 62q26 0 24 20t-26 20" stroke="#1c1a17" stroke-width="5" fill="none"/><path d="M146 40q-6-14 6-22M158 40q10-12 18-10" stroke="#3f7d3a" stroke-width="5" fill="none" stroke-linecap="round"/>',
 cola:'<path d="M120 36H180L172 118H128Z" fill="#3a1c10"/><path d="M120 36H180" stroke="#f3ead2" stroke-width="4"/><rect x="134" y="52" width="14" height="14" rx="3" fill="#fff" opacity=".35"/><rect x="154" y="66" width="14" height="14" rx="3" fill="#fff" opacity=".35"/><path d="M162 36L176 8" stroke="#e8452c" stroke-width="5" stroke-linecap="round"/>'
};
const grid=document.getElementById('menu-grid');
function show(c){
 grid.innerHTML=menu.filter(m=>m[0]===c).map(m=>`<article class="dish"><div class="tile" style="background:${bg[c]}"><svg viewBox="50 6 200 126" aria-hidden="true">${art[m[3]]}</svg></div><div class="txt"><h3>${m[1]}</h3><p>${m[4]}</p><span class="price">${m[2]} ${CUR}</span></div></article>`).join('');
}
show('Fast food');
document.getElementById('tabs').addEventListener('click',e=>{
 const b=e.target.closest('button'); if(!b) return;
 document.querySelectorAll('#tabs button').forEach(x=>x.setAttribute('aria-pressed',x===b));
 show(b.dataset.c);
});

// opening hours: every day 11:00 to 23:00
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const today=new Date().getDay();
document.getElementById('hours').innerHTML=days.map((d,i)=>`<li${i===today?' class="open"':''}><span>${d}</span><span>11:00 – 23:00</span></li>`).join('');
const h=new Date().getHours();
document.getElementById('status').textContent=(h>=11&&h<23)?'Open now until 23:00':'Closed now. Opens at 11:00';
// booking
document.getElementById('date').min=new Date().toISOString().slice(0,10);
document.getElementById('form').addEventListener('submit',e=>{
 e.preventDefault();
 const f=new FormData(e.target);
 document.getElementById('msg').textContent=`Thanks ${f.get('n')}! Table for ${f.get('g')} on ${f.get('d')} at ${f.get('t')} requested.`;
 e.target.reset();
});
