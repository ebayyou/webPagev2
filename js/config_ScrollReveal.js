// Todo /* ========== ScrollReveal : animation scroll ========== */

// ? configuration
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  //   reset: true,
});

// * Home_section
sr.reveal('.text-content', { origin: 'left' });
sr.reveal('.desc_content', { origin: 'left', delay: 750 });
sr.reveal('.button_group', { origin: 'bottom', delay: 850 });
sr.reveal('.card_home', { origin: 'top', delay: 950 });
sr.reveal('.card_img_home', {
  delay: 1000,
  rotate: { x: 360, z: 180 },
});
sr.reveal('.info_ig, .info_price', { origin: 'left', delay: 1000 });
sr.reveal('.card_brand, .info_time', { origin: 'right', delay: 1000 });

// * reusable
sr.reveal('.section_subtitle');
sr.reveal('.section_title', { delay: 500 });
sr.reveal('.subtitle_head', { origin: 'left' });
sr.reveal('.title_head', { origin: 'left', delay: 500 });
sr.reveal('.desc_head', { origin: 'left', delay: 600 });

// * About_section
sr.reveal('.about_img', {
  delay: 700,
  rotate: { x: 360, z: 180 },
});
sr.reveal('.about_box:nth-child(1)', { delay: 800 });
sr.reveal('.about_box:nth-child(2)', { delay: 900 });
sr.reveal('.about_box:nth-child(3)', { delay: 1000 });
sr.reveal('.left_achiv', { origin: 'left', delay: 600 });
sr.reveal('.right_achiv', { origin: 'right', delay: 800 });
sr.reveal('.left_achiv', { origin: 'left', delay: 1000 });

// * Skills_section
sr.reveal('.skills_data:nth-child(1), .skills_data:nth-child(2), .skills_data:nth-child(3)', { origin: 'left', delay: 700 });
sr.reveal('.skills_data:nth-child(1), .skills_data:nth-child(2), .skills_data:nth-child(3)', { origin: 'left', delay: 800 });

// * work_section
sr.reveal('.item_filters:nth-child(1)', { delay: 600 });
sr.reveal('.item_filters:nth-child(2)', { delay: 700 });
sr.reveal('.item_filters:nth-child(3)', { delay: 800 });
sr.reveal('.item_filters:nth-child(4)', { delay: 900 });

sr.reveal('.card_work', { delay: 600, scale: 0.75 });
sr.reveal('.img_work', { delay: 700, scale: 0.85 });
sr.reveal('.title_work', { delay: 800, origin: 'left' });
sr.reveal('.card_info', { delay: 900, origin: 'left' });
sr.reveal('.card_value, .rating_value', { delay: 1000, origin: 'bottom' });
sr.reveal('.btn_card', { delay: 1000, scale: 0.85 });

// * services_section
sr.reveal('.services_img', {
  delay: 700,
  rotate: { x: 360, z: 180 },
});
sr.reveal('.title_services', { delay: 800, origin: 'left' });

// * contact_section
sr.reveal('.contact_title', { delay: 600 });
sr.reveal('.card_contact', { delay: 700, origin: 'left' });
sr.reveal('.input_name', { delay: 700, origin: 'left' });
sr.reveal('.input_email', { delay: 800, origin: 'right' });
sr.reveal('.input_message', { delay: 900, origin: 'left' });

// * Footer_section
sr.reveal('.icon_logo', { delay: 500, scale: 0.75 });
sr.reveal('.brand_name', { delay: 600, origin: 'left' });
sr.reveal('.copy_text', { delay: 650, origin: 'left' });
sr.reveal('.item_icon:nth-child(1)', { delay: 600 });
sr.reveal('.item_icon:nth-child(2)', { delay: 650 });
sr.reveal('.item_icon:nth-child(3)', { delay: 700 });
sr.reveal('.item_icon:nth-child(4)', { delay: 750 });
sr.reveal('.item_icon:nth-child(5)', { delay: 800 });

sr.reveal('.group_child-1 ', { delay: 700 });
sr.reveal('.group_child-2', { delay: 900 });
sr.reveal('.group_child-3', { delay: 1100 });
