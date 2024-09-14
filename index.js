function showContent(section) {
    // Hide all sections
    var sections = document.querySelectorAll('.content div');
    sections.forEach(function (section) {
        section.classList.remove('visible');
        section.classList.add('hidden');
    });
    
    // Show the selected section
    document.getElementById(section).classList.remove('hidden');
    document.getElementById(section).classList.add('visible');
}

// cources

  