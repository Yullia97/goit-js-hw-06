      const categoriesList = document.getElementById('categories');
      const categoriesItems = categoriesList.querySelectorAll('.item');
      
      categoriesItems.forEach(categoryItem => {
       const categoryName = categoryItem.querySelector('h2').textContent;
       const categoryElements = categoryItem.querySelectorAll('li').length;
          
      console.log(`Number of categories: ${categoriesItems.length}\n`);
      console.log(`Category: ${categoryName}`);
      console.log(`Elements: ${categoryElements}\n`);
         });