/*


1. The page contains a **country selection control** (dropdown button) with predefined country options.

2. Each country has:

   * A **distinct content section** (paragraphs grouped together)
   * A **shared notice message** displayed above the content

3. The notice message text is **static**, except for the country name:

   > “You're currently viewing information intended for **[country]**, which may not be applicable to you. Select your country below.
   > Currently viewing information for: **[country]**”

4. When a user selects a country:

   * The system identifies the selected country name
   * Only the **[country] placeholder** in the notice message is updated
   * The rest of the sentence remains unchanged

5. At the same time:

   * The content section matching the selected country becomes visible
   * All other country-specific content sections are hidden

6. The selected country becomes the **current active state** of the page, ensuring:

   * The notice message
   * The visible content
     always stay synchronized

7. On initial page load:

   * A default country is preselected
   * The notice message displays that country name
   * The corresponding content section is shown automatically
*/
const dropdown = document.getElementById('countryDropdown');
const noticeCountry = document.getElementById('noticeCountry');
const currentCountry = document.getElementById('currentCountry');
const contents = document.querySelectorAll('.country-content');

// Function to update page when country is selected
function updateCountry(selectedCountry) {
  // Update notice message
  noticeCountry.textContent = selectedCountry;
  currentCountry.textContent = selectedCountry;

  // Show matching content, hide others
  contents.forEach(section => {
    if (section.dataset.country === selectedCountry) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Event listener for dropdown change
dropdown.addEventListener('change', (e) => {
  updateCountry(e.target.value);
});

// Initial page load: set default country
window.addEventListener('DOMContentLoaded', () => {
  const defaultCountry = dropdown.value; // first option
  updateCountry(defaultCountry);
});
