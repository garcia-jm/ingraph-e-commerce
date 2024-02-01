import images from "./images";

const heroItems = [
  {
    title: "Get perfect prints delivered to your business",
    desc: "Make your business stand out from the crowd with our professional and eye-catching signs and prints.",
    imgUrl: images.constructionHoardingSign,
    linkTo: "",
  },
  {
    title: "Business Cards",
    desc: "Elevate your professional image with our exquisite business cards. Crafted with precision and printed on high-quality materials, our business cards make a lasting impression. Showcase your unique brand identity with designs that captivate and details that speak volumes about your commitment to excellence.",
    imgUrl: images.businessCards,
    linkTo: "",
  },
  {
    title: "Banners",
    desc: "Unleash the power of visual storytelling with our stunning banners. Whether for events, promotions, or brand awareness, our banners command attention. Printed on top-tier materials, our banners ensure your message stands out, leaving a memorable impact on your audience.",
    imgUrl: images.bannersAndDisplay,
    linkTo: "",
  },
  {
    title: "Roll-up Banners",
    desc: "Make a statement at any event with our sleek and portable roll-up banners. Perfect for trade shows, presentations, or in-store displays, these banners are designed for easy setup and maximum visual impact. Elevate your brand presence with our high-quality, customizable roll-up banners.",
    imgUrl: images.rollUpBanner,
    linkTo: "",
  },
  {
    title: "Sandwich Boards",
    desc: "Guide your customers right to your doorstep with our eye-catching sandwich boards. Ideal for promotions, special offers, or simply enhancing your storefront, our durable sandwich boards are customizable to showcase your brand's personality. Make a lasting impression on passersby with this versatile advertising tool.",
    imgUrl: images.sandwichBoard,
    linkTo: "",
  },
  {
    title: "T-Shirts",
    desc: "Transform your team or customers into brand ambassadors with our custom-printed T-shirts. Crafted for comfort and style, our T-shirts provide a canvas for your brand message. Whether for promotional events or casual Fridays, our T-shirts embody your brand's spirit.",
    imgUrl: images.tshirt,
    linkTo: "",
  },
  {
    title: "Lawn Signs",
    desc: "Maximize your visibility in the community with our professionally designed lawn signs. From real estate promotions to event announcements, our durable lawn signs withstand the elements while attracting attention. Let your message flourish with our high-quality, eye-catching lawn signs.",
    imgUrl: images.lawnSigns,
    linkTo: "",
  },
  {
    title: "Gallery Wrap",
    desc: "Transform your space into an art gallery with our exquisite gallery wraps. Perfect for showcasing your most cherished photos or promoting your business in a sophisticated manner, our gallery wraps bring a touch of elegance to any setting. Elevate your visuals with our top-notch printing and finishing.",
    imgUrl: images.galleryWrap,
    linkTo: "",
  },
];

const categories = [
  {
    title: "Marketing Materials",
    imgUrl: images.marketingMaterials,
    serviceList: [
      {
        name: "Business Cards",
        price: 30,
        imgUrl: images.businessCards2,
        desc: "Elevate your professional image with Ingraph Limited's meticulously crafted business cards. Printed with precision, our cards exude sophistication and make a lasting impression. Choose from a variety of finishes and materials to reflect your unique style and leave a memorable mark on every introduction.",
      },
      {
        name: "Flyers",
        price: 30,
        imgUrl: images.flyers,
        desc: "Ignite your marketing campaigns with vibrant and impactful flyers from Ingraph Limited. Our high-quality prints ensure that your message stands out, captivating your audience and sparking interest. Whether promoting an event or showcasing your business, our flyers are designed to leave a lasting impact.",
      },
      {
        name: "Magnets",
        price: 30,
        imgUrl: images.magnets,
        desc: "Turn ordinary surfaces into captivating displays with Ingraph Limited's custom magnets. Ideal for promotional purposes or personalized gifts, our magnets boast exceptional print quality and durability. Transform your brand or memories into magnetic masterpieces that stick around.",
      },
    ],
  },
  {
    title: "Stickers/labels",
    imgUrl: images.adsAndDecals,
    serviceList: [
      {
        name: "Stickers",
        price: 30,
        imgUrl: images.stickers,
        desc: "Make a statement with Ingraph Limited's premium stickers. Crafted with precision and attention to detail, our stickers are perfect for branding, labeling, or expressing creativity. From product packaging to personalizing items, our stickers add a touch of uniqueness to every surface.",
      },
      {
        name: "Labels",
        price: 30,
        imgUrl: images.labels,
        desc: "Ingraph Limited offers a comprehensive range of labels tailored to meet your exact needs. Our precision printing ensures clear and professional labels suitable for packaging, branding, or organization. Elevate your products or streamline your workspace with our top-notch label solutions.",
      },
    ],
  },
  {
    title: "Gallery Wrap",
    imgUrl: images.galleryWrap,
    serviceList: [
      {
        name: "Gallery Wrap",
        price: 30,
        imgUrl: images.galleryWrap2,
        desc: "Transform your favorite images into stunning art pieces with Ingraph Limited's gallery wrap prints. Our expertly crafted canvases bring depth and vibrancy to your photos, turning memories into captivating visual stories. Showcase your moments with elegance and style.",
      },
    ],
  },
  {
    title: "Posters",
    imgUrl: images.posters2,
    serviceList: [
      {
        name: "Foam Board",
        price: 30,
        imgUrl: images.foamBoard,
        desc: "Ingraph Limited's foam board prints combine durability with visual appeal. Perfect for presentations, signage, or displays, our foam boards are lightweight yet sturdy, providing a polished look for your content. Make a lasting impression with our high-quality foam board prints.",
      },
      {
        name: "Paper Posters",
        price: 30,
        imgUrl: images.posters2,
        desc: "Capture attention with Ingraph Limited's vibrant paper posters. Whether for events, promotions, or decor, our posters showcase your content in brilliant color and detail. Choose from a variety of sizes and finishes to make a bold statement that demands attention.",
      },
    ],
  },
  {
    title: "Apparels",
    imgUrl: images.apparels,
    serviceList: [
      {
        name: "T-shirts",
        price: 30,
        imgUrl: images.tShirt2,
        desc: "Wear your identity with pride through Ingraph Limited's custom-printed T-shirts. Our high-quality fabric and precision printing ensure comfort and style. From promoting your brand to creating personalized apparel, our T-shirts let you make a statement effortlessly.",
      },
      {
        name: "Hoodies",
        price: 30,
        imgUrl: images.hoodies,
        desc: "Embrace comfort and warmth with Ingraph Limited's personalized hoodies. Crafted with attention to detail, our hoodies combine style and functionality. Perfect for team events, promotions, or personal use, our hoodies are a cozy canvas for your unique designs.",
      },
    ],
  },
];

const carouselItems = [
  {
    title: "Easy online ordering",
    desc: "Our online tools make the process as simple and clear as possible, and we're working to improve your experience all the time.",
    imgUrl: images.carouselImage1,
  },
  {
    title: "We ship and delivery",
    desc: "We offer shipping and delivery across Calgary.",
    imgUrl: images.carouselImage2,
  },
  {
    title: "Satisfaction guaranteed",
    desc: "Our commitment is to provide you with exceptional quality and we will continuously work hard to ensure your satisfaction.",
    imgUrl: images.carouselImage3,
  },
];

export default { heroItems, categories, carouselItems };
