document.addEventListener("DOMContentLoaded", function () {
  const adviceButton = document.querySelector(".btn");
  const adviceTextContainer = document.querySelector(".p");
  const adviceIdContainer = document.querySelector(".adviceNumber");

  fetchRandomAdvice();

  adviceButton.addEventListener("click", fetchRandomAdvice);

  async function fetchRandomAdvice() {
    try {
      adviceTextContainer.textContent = "Loading...";

      const apiUrl = "https://api.adviceslip.com/advice";
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Error al obtener el consejo");
      }

      const data = await response.json();

      adviceIdContainer.textContent = `#${data.slip.id}`;
      adviceTextContainer.textContent = `“${data.slip.advice}”`;
    } catch (error) {
      console.error(error);
      adviceTextContainer.textContent = "Error al cargar el consejo. Intenta nuevamente.";
    }
  }
});
