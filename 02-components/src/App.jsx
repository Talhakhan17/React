// import React from 'react'
import Card from "./Components/Card";
import "remixicon/fonts/remixicon.css";
// import { createIcons, bookmark } from 'lucide';

export const App = () => {


 const jobs = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    company: "Google",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4ZFsQZqoTJLEEUpiGAfSU3L71ulPUIiXPKPFsu4LXqHevWTGbmV9aQw&s=10",
    company: "Meta",
    posted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    company: "Apple",
    posted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg",
    company: "Amazon",
    posted: "5 days ago",
    post: "UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    company: "Netflix",
    posted: "2 weeks ago",
    post: "Motion Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/493/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
    company: "Microsoft",
    posted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabx5D8Dg8D_kfaKvI2HbC-U9zfBPA-nyTgLeXKzfOJw&s=10",
    company: "NVIDIA",
    posted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uY4d5TNjC1yRM2j7ceVjX12P1GR7UpNHNSvuQp_xPQ&s=10",
    company: "Adobe",
    posted: "6 days ago",
    post: "Graphic Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r5Pp8196JW12Uxw4kiUZbcUEFFmoaJgQgNesHKkUCmbF9BlWturF2c0&s=10",
    company: "Uber",
    posted: "3 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTZFHp00dTOMWullEHT9QM8k7VziJRnwaYfvTvTrSWA&s=10",
    company: "Airbnb",
    posted: "2 days ago",
    post: "Junior UI/UX Designer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Remote, India",
  },
];

console.log(jobs)

return (
  <div className="parent">
          {jobs.map(function(elem)
          {
            return < Card company = {elem .company } post = {elem.post} posted = {elem.posted }
            tag1 = {elem.tag1 } tag2 = {elem.tag2}  pay = {elem.pay} location = {elem.location}  brandLogo = {elem.brandLogo} /> 

             })}
    </div>
  );
};
export default App;
// export default jobs;
