document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const services = [
    {
      title: "Cyber Security Assessment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue nulla eu ex.",
      icon: "bi-shield-lock",
    },
    {
      title: "Intrusion Detection and Prevention",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue nulla eu ex.",
      icon: "bi-lock",
    },
    {
      title: "Incident Response and Recovery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue nulla eu ex.",
      icon: "bi-shield-shaded",
    },
  ];

  const features = [
    {
      title: "Customized Security Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "bi-wrench",
    },
    {
      title: "Vulnerability Assessment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "bi-graph-up",
    },
    {
      title: "24/7 Incident Response",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "bi-clock",
    },
    {
      title: "User Training Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "bi-person-lines-fill",
    },
  ];

  const goals = [
    {
      title: "Mission Statement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Key Objectives",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Client-Centric Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const pricing = [
    {
      title: "Basic",
      price: "$99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: ["24/7 Time Monitoring", "Cloud integration", "Email Security"],
    },
    {
      title: "Standard",
      price: "$199",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "Everything in Basic",
        "Advanced RealTime Monitoring",
        "Compliance Audits",
      ],
    },
    {
      title: "Premium",
      price: "$399",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      features: [
        "Everything in Standard",
        "Comprehensive Reports",
        "Advanced Threat Analysis",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Miss Sammy Feeny",
      role: "Manager",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "istockphoto-1269848319-612x612.jpg",
      rating: 5,
    },
    {
      name: "Rosemary Mante",
      role: "Software Engineer",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/50",
      rating: 4,
    },
    {
      name: "Regina Weismatt",
      role: "Cyber Consultant",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/50",
      rating: 5,
    },
    {
      name: "Marianne Bode",
      role: "Network Specialist",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/50",
      rating: 4,
    },
  ];

  function createCard(item, type) {
    switch (type) {
      case "service":
      case "feature":
        return `
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" data-aos="fade-up">
                  <div class="card-body text-center">
                    <i class="bi ${item.icon} display-4 mb-4"></i>
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                  </div>
                </div>
              </div>
            `;
      case "goal":
        return `
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" data-aos="fade-up">
                  <div class="card-body text-center">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                  </div>
                </div>
              </div>
            `;
      case "pricing":
        return `
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" data-aos="fade-up">
                  <div class="card-body text-center">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-price">${item.price}</h6>
                    <p class="card-text">${item.description}</p>
                    <ul class="list-unstyled">
                      ${item.features
                        .map((feature) => `<li>${feature}</li>`)
                        .join("")}
                    </ul>
                    <button class="btn btn-custom">Purchase</button>
                  </div>
                </div>
              </div>
            `;
      case "testimonial":
        return `
              <div class="col-lg-6 col-md-6 mb-4">
                <div class="card" data-aos="fade-up">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <img src="${
                        item.image
                      }" alt="${item.name}" class="rounded-circle me-3">
                      <div>
                        <h5 class="card-title mb-0">${item.name}</h5>
                        <p class="mb-0">${item.role}</p>
                      </div>
                    </div>
                    <p class="card-text">${item.feedback}</p>
                    <div>
                      ${'<i class="bi bi-star-fill text-warning"></i>'.repeat(
                        item.rating
                      )}
                      ${'<i class="bi bi-star text-warning"></i>'.repeat(
                        5 - item.rating
                      )}
                    </div>
                  </div>
                </div>
              </div>
            `;
      default:
        return "";
    }
  }

  const serviceContainer = document.getElementById("services");
  const featureContainer = document.getElementById("features");
  const goalContainer = document.getElementById("goals");
  const pricingContainer = document.getElementById("pricing");
  const testimonialContainer = document.getElementById("testimonials");

  serviceContainer.innerHTML = services
    .map((service) => createCard(service, "service"))
    .join("");
  featureContainer.innerHTML = features
    .map((feature) => createCard(feature, "feature"))
    .join("");
  goalContainer.innerHTML = goals
    .map((goal) => createCard(goal, "goal"))
    .join("");
  pricingContainer.innerHTML = pricing
    .map((plan) => createCard(plan, "pricing"))
    .join("");
  testimonialContainer.innerHTML = testimonials
    .map((testimonial) => createCard(testimonial, "testimonial"))
    .join("");
});
