document.addEventListener('DOMContentLoaded', function() {

document.getElementById('submit-recommendation').addEventListener('click', () => {
  // Get values from input fields
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const company = document.getElementById('company').value;
  const messageText = document.getElementById('message').value;
  const imageSelector = document.getElementById('image-selector');

  // Check if required fields are empty and display an error message
  if (!name.trim() || !title.trim() || !company.trim() || !messageText.trim() || !imageSelector.files.length) {
    showAlert('Please fill in all required fields.', 'error');
    return;
  }

  const newRecommendation = document.createElement('div');
  newRecommendation.className = 'testimonial';

  // Create URL for the selected image
  const imageURL = URL.createObjectURL(imageSelector.files[0]);

  // Create recommendation structure
  newRecommendation.innerHTML = `
  <img src="${imageURL}" alt="Recommendation Image">
    <div class="message">
      <p>
        ${messageText}
      </p>
    </div>
    <div class="author">
      <p>${name}</p>
      <p>${title}, ${company}</p>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star-half"></i>
    </div>
`;

  // Add new recommendation
    // Add new recommendation
const recommendationsSection = document.querySelector('.testimonials-section .row');
if (recommendationsSection.children.length >= 3) {
      recommendationsSection.removeChild(recommendationsSection.children[0]);
    }
recommendationsSection.appendChild(newRecommendation);

  // Clear input fields and reset the file input
  document.getElementById('name').value = '';
  document.getElementById('title').value = '';
  document.getElementById('company').value = '';
  document.getElementById('message').value = '';
  imageSelector.value = ''; // Clear the file input

  // Display the success alert
  showAlert('Recommendation submitted!', 'success');
});

document.getElementById('view-more-recommendations').addEventListener('click', () => {
  // Handle viewing more recommendations here (if available)
  // You can adjust this functionality as needed
  showAlert('More recommendations could be loaded here if available.', 'info');
});

function showAlert(message, type) {
  const alert = document.createElement('div');
  alert.className = `alert-${type}`;
  const iconClass = getIconClass(type);
  alert.innerHTML = `<i class="${iconClass}"></i> ${message}`;
  document.body.appendChild(alert);
  setTimeout(() => {
    alert.style.display = 'none';
  }, 3000); // Adjust the timeout as needed
}

function getIconClass(type) {
  switch (type) {
    case 'success':
      return 'fas fa-check-circle';
    case 'error':
      return 'fas fa-exclamation-circle';
    case 'info':
      return 'fas fa-info-circle';
    default:
      return 'fas fa-info-circle';
  }
}


document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Create a red error alert
    const alert = document.createElement('div');
    alert.className = 'alert-error';
    alert.innerHTML = 'This project is currently under early stages of construction. The link will be available as soon as it is ready.';
    
    // Append the alert to the body
    document.body.appendChild(alert);

    // Automatically remove the alert after a few seconds (e.g., 5 seconds)
    setTimeout(function() {
        alert.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
});

document.getElementById('btn-one').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Create a red error alert
  const alert = document.createElement('div');
  alert.className = 'alert-error';
  alert.innerHTML = 'This project is currently under early stages of construction. The link will be available as soon as it is ready.';
  
  // Append the alert to the body
  document.body.appendChild(alert);

  // Automatically remove the alert after a few seconds (e.g., 5 seconds)
  setTimeout(function() {
      alert.style.display = 'none';
  }, 5000); // 5000 milliseconds = 5 seconds
});
});
