/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const variable = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
  function mintNFT (Name, Ages, Salaries, Moreinfos) {
  const NFT = {
    "Name": Name,
    "Age": Ages,
    "Salary":Salaries,
    "Others": Moreinfos
}
variable.push(NFT);
console.log("HI!!: "+ Name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i< variable.length; i++) {
      console.log("\nName "+variable[i].Name);
      console.log("AGE "+variable[i].Age);
      console.log("SALARY "+variable[i].Salary);
      console.log("Other "+variable[i].Others);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+variable.length);
}

// call your functions below this line
mintNFT("Kshitiz","22","10lpa","brainstormer");
mintNFT("Manjot","21","7lpa","Coolguy");
mintNFT("Tarun","24","16lpa","gamer");
mintNFT("Ram","25","5lpa","coder");
listNFTs();
getTotalSupply();
