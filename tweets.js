const tweets = [
  "Cities should be designed with everyone in mind! Let's create #CitiesForEveryone where #EveryoneWINS with equal access to opportunities and resources.",

  "Inclusive cities are the future! Let's work together to build #CitiesForEveryone, where #EveryoneWINS by promoting diversity and accessibility.",

  "No one should be left behind in our cities. Let's strive for #CitiesForEveryone where #EveryoneWINS through equitable urban planning and development.",

  "Imagine a world where #CitiesForEveryone exist, where #EveryoneWINS by having safe, accessible, and sustainable urban spaces.",

  "Let's advocate for #CitiesForEveryone, where #EveryoneWINS through affordable housing, public transportation, and green spaces.",

  "In #CitiesForEveryone, #EveryoneWINS with improved air quality, reduced traffic congestion, and a healthier environment.",

  "When we prioritize accessibility, #CitiesForEveryone become a reality, and #EveryoneWINS by having better quality of life.",

  "Safety, inclusivity, and sustainability are the key to #CitiesForEveryone where #EveryoneWINS in the long run.",

  "Let's make our cities places where #EveryoneWINS by investing in education, healthcare, and social services. #CitiesForEveryone",

  "Empower communities to create #CitiesForEveryone where #EveryoneWINS by actively participating in shaping their urban environments.",

  "Accessible public spaces, transportation, and infrastructure are essential for creating #CitiesForEveryone where #EveryoneWINS.",

  "When we prioritize affordable housing, we contribute to #CitiesForEveryone where #EveryoneWINS with secure and comfortable homes.",

  "Let's make #CitiesForEveryone a reality by prioritizing green spaces and sustainable urban planning. #EveryoneWINS with a healthier environment.",

  "In #CitiesForEveryone, #EveryoneWINS with reduced inequality and enhanced opportunities for all residents.",

  "Design cities for people, not just cars. That's how we create #CitiesForEveryone where #EveryoneWINS with walkable streets and efficient public transportation.",

  "When we invest in accessible public transportation, #CitiesForEveryone become a reality, and #EveryoneWINS by having better mobility options.",

  "Collaboration and community engagement are the building blocks of #CitiesForEveryone where #EveryoneWINS.",

  "Let's build #CitiesForEveryone that prioritize social inclusion and well-being, where #EveryoneWINS by feeling a sense of belonging.",

  "Advocate for clean and sustainable energy in #CitiesForEveryone, where #EveryoneWINS with reduced pollution and a greener future.",

  "Creating #CitiesForEveryone is a win for the planet! #EveryoneWINS when our urban areas prioritize sustainability and conservation.",

  "Let's design cities that prioritize diversity and inclusivity. #CitiesForEveryone, where #EveryoneWINS through acceptance and equal opportunities.",

  "Invest in education and job opportunities to ensure that #CitiesForEveryone become places where #EveryoneWINS.",

  "Sustainable transportation is key to #CitiesForEveryone, where #EveryoneWINS with reduced traffic congestion and cleaner air.",

  "In #CitiesForEveryone, we can achieve gender equality and empower women to succeed. #EveryoneWINS when we break down barriers.",

  "Promote renewable energy sources in #CitiesForEveryone to create a greener and healthier environment where #EveryoneWINS.",

  "Affordable healthcare and quality education are essential in #CitiesForEveryone, where #EveryoneWINS with improved well-being and opportunities.",

  "Empower local businesses and entrepreneurs in #CitiesForEveryone to create thriving communities where #EveryoneWINS.",

  "Let's prioritize green infrastructure in #CitiesForEveryone, where #EveryoneWINS with cleaner and more sustainable urban spaces.",

  "Design cities with the future in mind, where #EveryoneWINS with forward-thinking technology and innovation in #CitiesForEveryone.",

  "Promote cultural diversity and heritage preservation in #CitiesForEveryone, where #EveryoneWINS through a rich and vibrant community.",

  "Access to clean water and sanitation should be a priority in #CitiesForEveryone, where #EveryoneWINS with better public health.",

  "Support affordable housing initiatives in #CitiesForEveryone, where #EveryoneWINS with stable and secure homes.",

  "Let's make public spaces accessible for people of all abilities in #CitiesForEveryone, where #EveryoneWINS with inclusivity.",

  "Invest in green technology and renewable energy to create #CitiesForEveryone where #EveryoneWINS with a cleaner and more sustainable future.",

  "In #CitiesForEveryone, let's focus on affordable and reliable public transportation for a better quality of life where #EveryoneWINS.",

  "Prioritize community gardens and green spaces in #CitiesForEveryone, where #EveryoneWINS with a healthier and more vibrant environment.",

  "In #CitiesForEveryone, everyone should have access to quality healthcare and education. That's how #EveryoneWINS.",

  "Create opportunities for youth engagement in #CitiesForEveryone, where #EveryoneWINS with a brighter future.",

  "Promote cycling infrastructure and pedestrian-friendly streets in #CitiesForEveryone, where #EveryoneWINS with reduced pollution and better health.",

  "In #CitiesForEveryone, let's build spaces that celebrate cultural diversity, where #EveryoneWINS through appreciation of different backgrounds.",

  "Invest in affordable and high-speed internet access for all in #CitiesForEveryone, where #EveryoneWINS with digital inclusion.",

  "Accessibility is a human right. Let's ensure that #CitiesForEveryone are designed with everyone in mind, where #EveryoneWINS.",

  "In #CitiesForEveryone, affordable housing is a fundamental right. #EveryoneWINS with safe and stable homes.",

  "Empower communities to take an active role in city planning to create #CitiesForEveryone where #EveryoneWINS.",

  "Promote community-based healthcare initiatives in #CitiesForEveryone, where #EveryoneWINS with better access to medical services.",

  "In #CitiesForEveryone, let's ensure that green spaces are easily accessible for all residents, where #EveryoneWINS with a healthier lifestyle.",

  "Invest in public art and cultural events in #CitiesForEveryone, where #EveryoneWINS through the celebration of creativity.",

  "Prioritize affordable and nutritious food options in #CitiesForEveryone, where #EveryoneWINS with better nutrition and well-being.",

  "In #CitiesForEveryone, let's foster innovation and entrepreneurship, where #EveryoneWINS with economic growth and job opportunities.",

  "Advocate for gender equality in #CitiesForEveryone, where #EveryoneWINS through equal opportunities and representation.",

  "Invest in affordable and energy-efficient housing in #CitiesForEveryone, where #EveryoneWINS with lower utility costs and environmental benefits.",

  "In #CitiesForEveryone, let's ensure that public transportation is not only accessible but also reliable, where #EveryoneWINS with better mobility.",

  "Promote cultural exchange and diversity festivals in #CitiesForEveryone, where #EveryoneWINS through the richness of shared experiences.",

  "Support initiatives for clean and renewable energy in #CitiesForEveryone, where #EveryoneWINS with a sustainable and eco-friendly future.",

  "In #CitiesForEveryone, let's make education accessible to all, where #EveryoneWINS with opportunities for personal and professional growth.",

  "Create a supportive environment for small businesses in #CitiesForEveryone, where #EveryoneWINS through economic empowerment.",

  "Prioritize urban green infrastructure in #CitiesForEveryone, where #EveryoneWINS with improved air quality and ecological sustainability.",

  "In #CitiesForEveryone, technological advancements should be harnessed for the benefit of all, where #EveryoneWINS through innovation and progress.",

  "Celebrate cultural heritage and diversity in #CitiesForEveryone, where #EveryoneWINS by embracing the beauty of different traditions.",

  "Access to clean and safe drinking water is a basic human right in #CitiesForEveryone, where #EveryoneWINS with improved public health.",

  "Let's make affordable housing a reality in #CitiesForEveryone, where #EveryoneWINS with stable and secure homes.",

  "In #CitiesForEveryone, let's design public spaces that are welcoming and accessible to everyone, where #EveryoneWINS through inclusivity.",

  "Invest in renewable energy and sustainable practices to create #CitiesForEveryone, where #EveryoneWINS with a greener and more eco-friendly environment.",

  "Accessible public transportation is a must in #CitiesForEveryone, where #EveryoneWINS with improved mobility and reduced traffic congestion.",

  "Prioritize community gardens and green spaces in #CitiesForEveryone, where #EveryoneWINS with a healthier and more vibrant environment.",

  "In #CitiesForEveryone, let's ensure that quality healthcare and education are accessible to all, where #EveryoneWINS.",

  "Empower the youth to shape their future in #CitiesForEveryone, where #EveryoneWINS with greater opportunities and engagement.",

  "Promote cycling infrastructure and pedestrian-friendly streets in #CitiesForEveryone, where #EveryoneWINS with cleaner air and healthier lifestyles.",

  "In #CitiesForEveryone, celebrate cultural diversity and heritage, where #EveryoneWINS by embracing different traditions and backgrounds.",

  "Invest in affordable and high-speed internet access for all in #CitiesForEveryone, where #EveryoneWINS with digital inclusion and connectivity.",

  "Accessibility should be a top priority in #CitiesForEveryone, where #EveryoneWINS with equal opportunities and access to public spaces.",

  "In #CitiesForEveryone, affordable housing is a fundamental right. #EveryoneWINS with safe and stable homes.",

  "Empower local communities to have a say in city planning for #CitiesForEveryone, where #EveryoneWINS with a sense of ownership and belonging.",

  "Prioritize community-based healthcare initiatives in #CitiesForEveryone, where #EveryoneWINS with better access to medical services.",

  "In #CitiesForEveryone, let's ensure that green spaces are easily accessible for all residents, where #EveryoneWINS with a healthier lifestyle.",

  "Invest in public art and cultural events in #CitiesForEveryone, where #EveryoneWINS through the celebration of creativity and diversity.",

  "Support initiatives for gender equality in #CitiesForEveryone, where #EveryoneWINS through equal opportunities and representation.",

  "Advocate for affordable and energy-efficient housing in #CitiesForEveryone, where #EveryoneWINS with lower utility costs and environmental benefits.",

  "In #CitiesForEveryone, let's make public transportation not only accessible but also reliable, where #EveryoneWINS with better mobility.",

  "Promote cultural exchange and diversity festivals in #CitiesForEveryone, where #EveryoneWINS through the richness of shared experiences.",

  "Support initiatives for clean and renewable energy in #CitiesForEveryone, where #EveryoneWINS with a sustainable and eco-friendly future.",

  "In #CitiesForEveryone, let's make education accessible to all, where #EveryoneWINS with opportunities for personal and professional growth.",

  "Create a supportive environment for small businesses in #CitiesForEveryone, where #EveryoneWINS through economic empowerment and entrepreneurship.",

  "Prioritize urban green infrastructure in #CitiesForEveryone, where #EveryoneWINS with improved air quality and ecological sustainability.",

  "In #CitiesForEveryone, technological advancements should benefit everyone, where #EveryoneWINS through innovation and progress.",

  "Celebrate cultural heritage and diversity in #CitiesForEveryone, where #EveryoneWINS by embracing the beauty of different traditions.",

  "Access to clean and safe drinking water is a basic human right in #CitiesForEveryone, where #EveryoneWINS with improved public health.",

  "Let's make affordable housing a reality in #CitiesForEveryone, where #EveryoneWINS with stable and secure homes.",

  "In #CitiesForEveryone, let's design public spaces that are welcoming and accessible to everyone, where #EveryoneWINS through inclusivity.",

  "Invest in renewable energy and sustainable practices to create #CitiesForEveryone, where #EveryoneWINS with a greener and more eco-friendly environment.",

  "Accessible public transportation is a must in #CitiesForEveryone, where #EveryoneWINS with improved mobility and reduced traffic congestion.",

  "Prioritize community gardens and green spaces in #CitiesForEveryone, where #EveryoneWINS with a healthier and more vibrant environment.",

  "In #CitiesForEveryone, let's ensure that quality healthcare and education are accessible to all, where #EveryoneWINS.",

  "Empower the youth to shape their future in #CitiesForEveryone, where #EveryoneWINS with greater opportunities and engagement.",

  "Promote cycling infrastructure and pedestrian-friendly streets in #CitiesForEveryone, where #EveryoneWINS with cleaner air and healthier lifestyles.",

  "In #CitiesForEveryone, celebrate cultural diversity and heritage, where #EveryoneWINS by embracing different traditions and backgrounds.",

  "Invest in affordable and high-speed internet access for all in #CitiesForEveryone, where #EveryoneWINS with digital inclusion and connectivity.",

  "Accessibility should be a top priority in #CitiesForEveryone, where #EveryoneWINS with equal opportunities and access to public spaces.",

  "In #CitiesForEveryone, affordable housing is a fundamental right. #EveryoneWINS with safe and stable homes.",

  "Empower local communities to have a say in city planning for #CitiesForEveryone, where #EveryoneWINS with a sense of ownership and belonging.",
]
