const cartitems = document.querySelector("#cartitems")
const cart=document.querySelector("#cart")
const price=document.querySelector("#price").value
var foodname=document.getElementById("foodname").value
var addcart=document.getElementById("addcart")
const priceincart=document.getElementById("priceincart")
const nameincart=document.getElementById("nameincart")
addcart.onclick=addtocart
function addtocart(){
    

}

cartitems.onclick=smallcart
function smallcart(){
    cart.style.display="block"
}
