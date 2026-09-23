async function fetchListings() {
  try {
    const response = await fetch("./data/airbnb_sf_listings_500.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const listings = await response.json();
    return listings;
  } catch (error) {
    console.error("Failed to fetch listings:", error);
    throw error;
  }
}

const listings = await fetchListings();
const first50Listings = listings.slice(0, 50);

console.log(first50Listings);
console.log("Number of listings:", first50Listings.length);

const listingsContainer = document.querySelector("#listings");

function createListingCard(listing) {
  const listingWrapper = document.createElement("div");
  listingWrapper.className = "listing col-lg-6 col-md-6 col-12";

  const card = document.createElement("article");
  card.className = "card h-100";

  let amenities = [];

    try {
    amenities = JSON.parse(listing.amenities);
    } catch (error) {
    console.error("Could not parse amenities:", error);
    }

    const displayedAmenities = amenities.slice(0, 5);

    card.innerHTML = `
    <img
        src="${listing.picture_url}"
        class="card-img-top"
        alt="${listing.name}"
    >

    <div class="card-body">
        <h3 class="card-title">${listing.name}</h3>

        <div class="host d-flex align-items-center gap-2 mb-3">
        <img
            src="${listing.host_thumbnail_url}"
            alt="${listing.host_name}"
            width="45"
            height="45"
            class="rounded-circle"
        >

        <span>
            <strong>Host:</strong> ${listing.host_name}
        </span>
        </div>

        <p>
        <strong>Price:</strong> ${listing.price}
        </p>

        <div class="description mb-3">
        ${listing.description}
        </div>

        <div class="amenities">
        <strong>Amenities:</strong>

        <ul>
            ${displayedAmenities
            .map((amenity) => `<li>${amenity}</li>`)
            .join("")}
        </ul>
        </div>
    </div>
    `;

  listingWrapper.appendChild(card);

  return listingWrapper;
}

function renderListings(listingsToRender) {
  listingsContainer.innerHTML = "";

  listingsToRender.forEach((listing) => {
    const listingCard = createListingCard(listing);
    listingsContainer.appendChild(listingCard);
  });
}

renderListings(first50Listings);

function getNumericPrice(price) {
  return Number(price.replace(/[$,]/g, ""));
}

const sortPrice = document.querySelector("#sort-price");

sortPrice.addEventListener("change", () => {
  const sortedListings = [...first50Listings];

  if (sortPrice.value === "low-high") {
    sortedListings.sort(
      (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
    );
  }

  if (sortPrice.value === "high-low") {
    sortedListings.sort(
      (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
    );
  }

  renderListings(sortedListings);
});