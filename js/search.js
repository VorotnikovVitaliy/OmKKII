document.querySelectorAll('.search_icon').forEach(elem => { 
    elem.addEventListener('click', _=> { 
      document.querySelectorAll('.header-nav-ul').forEach(elem2 => { 
        elem2.classList.toggle('disable');
      })
      document.querySelectorAll('.search_pole').forEach(elem2 => { 
        elem2.classList.toggle('active');
      })
      document.querySelectorAll('.search_icon').forEach(elem2 => { 
        elem2.classList.toggle('active');
      })
    })
  })

document.querySelectorAll('.search_icon_mobile').forEach(elem => { 
    elem.addEventListener('click', _=> { 
      document.querySelectorAll('.search-mobile-fullpage').forEach(elem2 => { 
        elem2.classList.toggle('active');
      })
    })
})
document.querySelectorAll('.search-mobile-disable').forEach(elem => { 
    elem.addEventListener('click', _=> { 
      document.querySelectorAll('.search-mobile-fullpage').forEach(elem2 => { 
        elem2.classList.toggle('active');
      })
    })
})

