const quotations = [
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. -Colin Powell",
     "If you are not willing to risk the usual, you will have to settle for the ordinary. -Jim Rohn",
     "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss"
   ];
   
   // Function to get a random index from the array
   const getRandomIndex = () => Math.floor(Math.random() * quotations.length);
   
   // Function to print a random quotation to the console
   const printRandomQuotation = () => {
     const randomIndex = getRandomIndex();
     console.log(quotations[randomIndex]);
   };
   
   // Call the function to print a random quotation
   printRandomQuotation();