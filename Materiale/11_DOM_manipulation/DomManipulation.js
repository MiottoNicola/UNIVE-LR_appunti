let p1 = myP;
let [ b ] = document.getElementsByTagName("body");
let p2 = b.getElementsByTagName("p");
let h_list = document.getElementsByTagName("h1");
let list = [...h_list];
let [ first_h1, second_h1 ] = h_list;
b.removeChild(first_h1);
second_h1.remove();
let new_br = document.createElement("br");
let fc = p2[0].firstChild;
let check_1 = new_br.parentElement === p1;
fc.after(new_br);
let check_2 = new_br.parentElement === p1;
p2[1].innerHTML = "Prova <b a='3'>Bold</b><br>a capo";
let p2_hcontent = p2[1].innerHTML;
let tc = p2[1].textContent;
p2[1].textContent = "Prova <b a='3'>Bold</b><br>a capo";
console.log(b.getAttribute("bgcolor"));
b.setAttribute("bgcolor","#00ff00");

1;

