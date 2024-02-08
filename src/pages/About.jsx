import React from 'react';
import './About.css'
import { CakeGallery } from '../components/CakeGallery';

function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>About</h1>
        </div>
      </header>
      <div className='container my-5'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deserunt minus laudantium exercitationem corporis, eius soluta sit ex dolorem illum minima similique, 
        quia qui temporibus saepe quasi est unde magni nam voluptatem earum molestiae fugiat veritatis dignissimos. 
        Itaque, tempora facilis qui nesciunt veniam ipsum pariatur ut cupiditate quaerat aperiam provident 
        quis optio fuga molestiae voluptatem velit ullam laboriosam animi est dolorem quidem voluptas 
        temporibus consectetur sed. Ad repellendus possimus, beatae quo nobis nam eligendi quos. 
        Inventore sint nobis cupiditate, numquam eius laborum temporibus tenetur dignissimos. 
        Incidunt fuga cum commodi repudiandae adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deserunt minus laudantium exercitationem corporis, eius soluta sit ex dolorem illum minima similique, 
        quia qui temporibus saepe quasi est unde magni nam voluptatem earum molestiae fugiat veritatis dignissimos. 
        Itaque, tempora facilis qui nesciunt veniam ipsum pariatur ut cupiditate quaerat aperiam provident 
        quis optio fuga molestiae voluptatem velit ullam laboriosam animi est dolorem quidem voluptas 
        temporibus consectetur sed. Ad repellendus possimus, beatae quo nobis nam eligendi quos. 
        Inventore sint nobis cupiditate, numquam eius laborum temporibus tenetur dignissimos. 
        Incidunt fuga cum commodi repudiandae adipisci.</p>
      </div>
      <div className='bg-dark text-light'>
        <CakeGallery />
      </div>
    </div>
  )
}

export default About;
