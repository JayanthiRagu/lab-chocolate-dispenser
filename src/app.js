var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count)
{
    if(count<1)
        return "Number cannot be zero/negative";
    for(let i=0;i<count;i++)
    {
        chocolates.unshift(color);
    }
    return chocolates.length;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number)
{
    var newArray=[];
    if(number<1)
        return "Number cannot be zero/negative";
    else if(number>chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for(let i=0;i<number;i=i+1)
    {
        newArray.push(chocolates.shift());
    }
    return newArray;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{
    var newArray=[];
    if(number<1)
        return "Number cannot be zero/negative";
    else if(number>chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for(let i=0;i<number;i=i+1)
    {
        newArray.push(chocolates.pop());
    }
    return newArray;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color)
{
    var newArray=[];
    if(number<1)
        return "Number cannot be zero/negative";
    else if(number>chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for(let i=chocolates.length-1;i>=0;i=i-1)
    {
        if(chocolates[i] == color)
        {
            newArray.push(color);
        }
        
    }
    return newArray;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates)
{
    // let newChoco=chocolates;
    // chocolates.sort();
    // let count=1,temp,j=1,newArray=[];
    // for(let i=0;i<chocolates.length;i++)
    // {
    //     temp=chocolates[i];
    //     if(temp==chocolates[j] && j<chocolates.length)
    //     {
    //         count++;
    //         j++;
    //     }
    //     else
    //     {
    //         newArray.unshift(count);
    //         count=1;
    //         j++;
    //     }
    // }

    // console.log(newArray)
    // return newArray;
    let counts = {},newArray=[];

    for(let i =0; i < chocolates.length; i++)
    { 
        if (counts[chocolates[i]])
        {
            counts[chocolates[i]]+= 1
        }
        else 
        {
            counts[chocolates[i]] = 1
        }
    }
    for(let val in counts)
    {
        newArray.push(counts[val]);
    }
    return newArray;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates)
{
    let counts = {},newArray=[];
    let countArray =[];

    for(let i =0; i < chocolates.length; i++)
    { 
        if (counts[chocolates[i]])
        {
            counts[chocolates[i]]+= 1
        }
        else 
        {
            counts[chocolates[i]] = 1
        }
    }
    countArray=Object.entries(counts).sort((a,b) => b[1]-a[1]);
    let j=0;
    for(let val in countArray)
    {
       let color=countArray[val][0];
        for(let i=0;i<countArray[val][1];i++)
        {
             newArray.push(color);
        }
        j++;
    }
  
     return newArray;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor)
{
    let newArray=[]
    if(chocolates.length==0)
        return newArray;
    if(number<1)
        return "Number cannot be zero/negative";
    if((chocolates.length==1)&&(chocolates[0]==color)&&color==finalColor)
    {
        return "Can't replace the same chocolates";
    }
        
    for(let i=0;i< chocolates.length; i++)
    {
        if(color==chocolates[i]&&number>0)
        {
            chocolates[i]=finalColor;
            number--;
        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor)
{
    let count=0;
    if(chocolates.length==0)
        return [0,chocolates];
    else if((chocolates.length==1)&&(chocolates[0]==color)&&color==finalColor)
    {
        return "Can't replace the same chocolates";
    }
    else
    {
        for(let val in chocolates)
        {
            if(color==chocolates[val])
            {
                chocolates[val]=finalColor;
                count++;
            }
        }
        return [count,chocolates];
    }
    
    
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
