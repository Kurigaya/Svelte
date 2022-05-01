<script>
	import {account,accounts,pizzaorder,total} from './store.js';
	

	let headerImg = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/278854357_102969935733517_2123775247032978635_n.png?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFougsAONKeF8YLSuxRsczjlhz3yRoFlMOWHPfJGgWUw487EhGVnHVOJBS97glrW9teTMnmNw8IO4M_78tY-GO9&_nc_ohc=9fO1UBML_3IAX8PQ8dw&tn=8JrF3voIr-nDALLq&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT87IOjXZYI4DK4jh-PwivquF0zXDh8WG56wBdZnzsVYwQ&oe=627313BA"
	let extCheese = "https://media.discordapp.net/attachments/946030811705122918/970042673824145419/unknown.png";
	let hamCheese = "https://media.discordapp.net/attachments/946030811705122918/970042734658322432/unknown.png";
	let pepCheese = "https://cdn.discordapp.com/attachments/946030811705122918/970042794708197396/unknown.png";
	let bbqSeafood = "https://cdn.discordapp.com/attachments/946030811705122918/970071556577447956/unknown.png";
	let seafoodHawaiian = "https://cdn.discordapp.com/attachments/946030811705122918/970071626785898627/unknown.png";
	let shimpCocktail = "https://cdn.discordapp.com/attachments/946030811705122918/970071691340439552/unknown.png";
	let meatLover = "https://cdn.discordapp.com/attachments/946030811705122918/970071750224248913/unknown.png";
	let spicyChicken = "https://cdn.discordapp.com/attachments/946030811705122918/970071750224248913/unknown.png";
	let vegetarianP = "https://cdn.discordapp.com/attachments/946030811705122918/970071890326593536/unknown.png";

	let pizzaCheese = [{name:"Extreme Cheese",pic:extCheese,ch:false}
						,{name:"Ham & Cheese",pic:hamCheese,ch:false}
						,{name:"Pepperoni & Cheese",pic:pepCheese,ch:false}];
	let pizzaSeafood = [{name:"BBQ Seafood", pic:bbqSeafood}
						,{name:"Seafood Hawaiian",pic:seafoodHawaiian}
						,{name:"Shimp Cocktail",pic:shimpCocktail}];
	let pizzaPremium = [{name:"Meat Lover", pic:meatLover}
						,{name:"Spicy Chicken Twist", pic:spicyChicken}
						,{name:"Vegetarian Paradise",pic:vegetarianP}];
	let drinkMenu = [["Vanilla Milkshake",69]
					,["Chocolate Malt Milkshake",69]
					,["Red Velvet Milkshake",69]
					,["7 UP",20]
					,["Pepsi",20]
					,["Sunkist",20]
					,["Drinking Water",10]];
	
	let checkpizza = {L:false,S:false}
	let pizzaSize = {S:0, L:0};
	let orderList = []
	function addpizza(){
		if(checkpizza.L){
			$pizzaorder.l += 1;
			pizzaSize.L = pizzaSize.L;
			checkpizza.L = false;
		}
		if(checkpizza.S){
			$pizzaorder.s += 1;
			pizzaSize.S = pizzaSize.S;
			checkpizza.S = false;
		}
		$total += Number(pizzaorder.s*99);
		$total += Number(pizzaorder.l*179);
		
	}
</script>

<img src={headerImg} alt="Kann Pizza Header" width="100%">
<h2>Customer: {$accounts[$account].name}</h2>
<h1>Cheese</h1>
{#each pizzaCheese as item,index}
	<span class="menu">
		<img src={item.pic} alt={item.name} width="30%">
		<label><input type="checkbox" bind:checked={checkpizza.L}>Large</label>
		<label><input type="checkbox" bind:checked={checkpizza.S}>Small</label>
		<br>
		<p class="pizzaname">{item.name}</p><br>
		<button type='button' on:click={addpizza}>Add</button><br>
		
	</span>
{/each}
<h1>Seafood</h1>
{#each pizzaSeafood as item}
	<span class="menu">
		<img src={item.pic} alt={item.name} width="30%"><br>
		<p class="pizzaname">{item.name}</p><br>
		<button>Add</button><br>
	</span>
{/each}
<h1>Premium</h1>
{#each pizzaPremium as item}
	<span class="menu">
		<img src={item.pic} alt={item.name} width="30%"><br>
		<p class="pizzaname">{item.name}</p><br>
		<button>Add</button><br>
	</span>
{/each}

<h1>Your Payment total : {total}</h1>

<style>

span{
	/* display: block; */
	position: relative;
	text-align: center;
	margin: 20px;
}

.pizzaname{
	text-align: justify;
	font: optional;
}

h2{
	text-align: right;
	font-size: large;
}
/* input, p{
	margin: 7px;
} */
</style>