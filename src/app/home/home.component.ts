import { Component } from '@angular/core';
import { Home } from '../interface/home';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
home:Home[]=[{
  description:"A Grand Wooden Windows with ornate carvings,often decorated with brass studs or motifs,welcomes visitors.Having a central Courtyard(called Aangan),in the middle of the home,is a spot to make the timeless memories with our loved onces.Wide verandas supported by intricately carved wooden Pillars are a common features, these areas provide shade and serve as an extention of the livng space.",
  homeName:"Home of Love",
  id:1,
  price:"$591.26(Rs.50,000)",
  src:" ../../assets/house6.jpg",
},
{
  description:"An Old Indian House Surrounded by Lush Greenery is a Serene and picturesque retreat,embodying harmony between architecture and Nature This old Indian House is more than just a dwelling-it is a sanctuary that breathes life into its inhabitants,offering a timeless connection to the nature,culture, and Traditions.",
  homeName:"Home of Peace in the Womb of Nature",
  id:2,
  price:"$768.64(Rs.65,000)",
  src:"../../assets/home11.jpg",
},
{
  description:"An Indian Home filled with lights is a radiant spectacle,exuding warmth,joy and festivity. The Home becomes a glowing Heaven,its glowing heaven,its Beauty amplified by the interplay of traditions decor and shimmering illumination. From the courtyard to the balconies,the house radiates joy.The Light seemto carry a deeper message:a celebration of life ,love and togetherness,transforming the home into a luminous masterpiece that feels as warm as the hearts of those who live within.",
  homeName:"The Home of Lights",
  id:3,
  price:"$1.182,590(Rs.1,00,000)",
  src:"../../assets/house4.jpg",
},
{
  description:"A beautiful Indian home inspired by the culture of Andhra Pradesh would seamlessly blend traditional aesthetics with functional design, capturing the region’s rich heritage and artistry Lighting: Traditional hanging brass lamps and wall-mounted lanterns provide a warm, inviting glow. Garden: A lush space with flowering plants like jasmine and hibiscus. Stone pathways lead to a swing under a neem or mango tree. This home would be a celebration of Andhra’s rich cultural tapestry, offering warmth, vibrancy, and a sense of rootedness.",
  homeName:"Home of beautiful Interiors",
  id:4,
  price:"$600,000(Rs.67,651)",
  src:"../../assets/home-end.jpg",
},
{
  description:"A home inspired by Rajasthan interiors would be a vibrant, regal space that reflects the grandeur of the state's palaces and havelis while incorporating traditional craftsmanship and earthy charm. Textiles: Bold prints like Bandhani, Sanganeri, and leheriya are used for curtains, cushions, and wall tapestries. Artifacts: Decorative items include puppets, camel figurines, and enamel vases. Walls might also have mudwork or mirror-inlaid panels. This Rajasthani-inspired home would exude grandeur, cultural richness, and the timeless elegance of royal India while remaining warm and welcoming",
  homeName:"Home representing Indian Rich and varity Heritage",
  id:5,
  price:"$568.000(Rs.48,38)",
  src:" ../../assets/home9.jpg",
},
{
  description:"A modern house inspired by Indian old culture merges contemporary design elements with traditional craftsmanship and cultural motifs. This fusion creates a home that is stylish, functional, and deeply rooted in India's heritage. Art and Textiles: Curtains and cushions in traditional fabrics like Chanderi, Kalamkari, or Ajrakh prints. Wall hangings and tapestries with mirror work or embroidery. This modern yet culturally inspired home creates a harmonious balance, offering a timeless feel with all the conveniences of contemporary living.",
  homeName:"Home of Modernization with the Touch of Traditionism",
  id:6,
  price:"$200.000(Rs.16,912)",
  src:" ../../assets/home7.jpg",
}
]

}
