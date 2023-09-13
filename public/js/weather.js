// document.addEventListener("DOMContentLoaded", () => {
//     const weatherForm = document.getElementById("weatherForm");
  
//     weatherForm.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const cityInput = document.getElementById("query");
//       const city = cityInput.value;
  
//       try {
//         const response = await fetch("/weather", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ city }),
//         });
  
//         if (response.ok) {
//           const data = await response.json();
//           if (data.weather) {
//             // Display weather information in an alert
//             alert(`Temperature in ${city}: ${data.weather.main.temp}°F`);
//           } else if (data.error) {
//             // Display error message in an alert
//             alert(data.error);
//           }
//         } else {
//           // Display a generic error message in an alert
//           alert("Something went wrong. Please try again.");
//         }
//       } catch (error) {
//         console.error(error);
//         // Display an error message in an alert
//         alert("An error occurred. Please try again later.");
//       }
//     });
//   });
  