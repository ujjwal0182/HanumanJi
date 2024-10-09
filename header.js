function loadHeader() {
    var headerContent = `
    <header>
        <div class="menu-icon" onclick="toggleMenu()">
            ☰ <!-- Unicode for Hamburger icon -->
        </div>

        <nav>
            <ul>
                <li><a href="index2.html">Home</a></li>
                <li><a href="hanuman-chalisa.html">Hanuman Chalisa</a></li>
                <li><a href="bajrang-baan.html">Bajrang Baan</a></li>
                <li><a href="jai-jai-bajrangbali.html">Jai Jai Jai Bajrangbali</a></li>
                <li><a href="#">More Prayers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>`;
    
    // Inject the header content into the placeholder
    document.getElementById('header-placeholder').innerHTML = headerContent;
}

window.onload = loadHeader;
