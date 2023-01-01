//Assignment 6(Day_6)

//1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

class movie
{
  constructor(title,studio,rating)
    {
      this.title=title;
      this.studio=studio;
      this.rating=rating;
    }

    ratings()
    {
      console.log( `
      Ratings: ${this.rating}
      Title: ${this.title}
      Studio: ${this.studio}`);
    }
}

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

let casinoRoyale=new movie("casino Royale", "Eon Productions","PG13");  
console.log(casinoRoyale.ratings());

/*OUTPUT

 Ratings: PG13
 Title: casino Royale
 Studio: Eon Productions

*/


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie1
{
  constructor(title,studio,rating="PG")
    {
      this.title=title;
      this.studio=studio;
      this.rating=rating;
    }

    ratings()
    {
      console.log( `
      Ratings: ${this.rating}
      Title: ${this.title}
      Studio: ${this.studio}`);
    }
}


let CasinoRoyale=new movie1("casino Royale", "Eon Productions");  
console.log(CasinoRoyale.ratings());

/*OUTPUT

Ratings: PG
Title: casino Royale
Studio: Eon Productions

*/


//2. Write a “person” class to hold all the details

class person
{
  constructor(name,age,address,email,job)
    {
      this.name=name;
      this.age=age;
      this.address=address;
      this.email=email;
      this.job=job;
    }
    getalldetailsperson()
    {
      return `
      Name: ${this.name}, 
      Age: ${this.age}, 
      Address: ${this.address}, 
      Email: ${this.email},
      Job: ${this.job}`;
    }
    getAddress()
    {
      // return "Address of is " + this.name + this.address;
      return `Address of ${this.name} is ${this.address}`;
    }
    static gender()
    {
      return "Female";
    }
}

let person1=new person("Ankitha",34,"banglore #3 mysore","johan@gmail.com","Testing")
console.log(person1.getAddress());
console.log(person1.getalldetailsperson());
console.log(person.gender());

/*OUTPUT
Address of Ankitha is banglore #3 mysore

Name: Ankitha, 
Age: 34, 
Address: banglore #3 mysore, 
Email: johan@gmail.com,
Job: Testing

Female
*/

// 3.)Circle - Class
// Convert the UML diagram to Typescript class. - use number for double

class circle
{
  constructor(radius,color)
  {
    this.radius=radius;
    this.color=color;
  }
  getRadius()
  {
    return this.radius;
  }
  setRadius(newRadius)
  {
    this.radius=newRadius;
  }
  getColor()
  {
    return this.color;
  }
  setColor(newColor)
  {
    this.color=newColor;
  }
  getArea()
  {
    let area=Math.PI*this.radius*this.radius;
    console.log(area);
  }
  getCircumference()
  {
    let circumference=2*this.radius*Math.PI;
    console.log(circumference);
  }
}

let calculatecircle=new circle(50,"red");
console.log(calculatecircle.getRadius());
console.log(calculatecircle.getArea());
console.log(calculatecircle.getCircumference());

/*OUTPUT

50
7853.981633974483
156 314.1592653589793
*/