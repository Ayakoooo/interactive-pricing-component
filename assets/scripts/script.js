const pageviews = document.querySelector("#pageviews");
const userRange = document.querySelector("#user-range");
const rangeProgress = document.querySelector(".card-range-progress");
const planPrice = document.querySelector(".plan-price");
const planType = document.querySelector(".plan-type");
const typeToggle = document.querySelector("#type-toggle");
const plans = [
  {
    views: "10K",
    price: 8,
  },
  {
    views: "50K",
    price: 12,
  },
  {
    views: "100K",
    price: 16,
  },
  {
    views: "500K",
    price: 24,
  },
  {
    views: "1M",
    price: 36,
  },
];

userRange.oninput = () => {
  const percentage = (userRange.value / userRange.max) * 100;
  rangeProgress.style.width = percentage + "%";
};

const updatePricing = () => {
  const { views, price: basePrice } = plans[userRange.value];
  const isYearly = typeToggle.checked;

  pageviews.textContent = `${views} Pageviews`;
  planPrice.textContent = `$${(isYearly ? basePrice * 0.75 : basePrice).toFixed(
    2
  )}`;
  planType.textContent = `/ ${isYearly ? "year" : "month"}`;
};

userRange.addEventListener("input", updatePricing);
typeToggle.addEventListener("change", updatePricing);

updatePricing();
