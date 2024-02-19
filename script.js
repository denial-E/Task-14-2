document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
  
    
    function fetchData(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    }
  
   
    const apiUrl = 'https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10';
  
   
    fetchData(apiUrl)
      .then(data => {
        
        dataContainer.textContent = JSON.stringify(data);
      })
      .catch(error => {
       
        console.error('Error fetching data:', error);
      });
  });
  