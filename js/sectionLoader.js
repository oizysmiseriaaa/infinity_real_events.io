class SectionLoader {
    constructor() {
        this.sectionsContainer = document.getElementById('sections-container');
        this.sections = [
            'home',
            'about', 
            'team',
            'services',
            'gallery',
            'reviews',
            'contact'
        ];
        this.loadedSections = new Set();
    }

    async loadSection(sectionName) {
        if (this.loadedSections.has(sectionName)) {
            return; 
        }

        try {
            const response = await fetch(`sections/${sectionName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load section: ${sectionName}`);
            }
            
            const html = await response.text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            const sectionElement = tempDiv.querySelector(`#${sectionName}`);
            if (sectionElement) {
                this.sectionsContainer.appendChild(sectionElement);
                this.loadedSections.add(sectionName);
                
                this.initializeSection(sectionName);
            }
        } catch (error) {
            console.error(`Error loading section ${sectionName}:`, error);
        }
    }

    async loadAllSections() {
        for (const section of this.sections) {
            await this.loadSection(section);
        }
    }

    initializeSection(sectionName) {
        switch(sectionName) {
            case 'gallery':
                if (typeof initGallery === 'function') {
                    initGallery();
                }
                break;
            case 'reviews':
                if (typeof initReviews === 'function') {
                    initReviews();
                }
                break;
            case 'team':
                if (typeof initTeam === 'function') {
                    initTeam();
                }
                break;
        }
    }

    async loadSectionOnDemand(sectionName) {
        if (!this.loadedSections.has(sectionName)) {
            await this.loadSection(sectionName);
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const loader = new SectionLoader();
    
    await loader.loadAllSections();
    
    if (typeof initSmoothScrolling === 'function') {
        initSmoothScrolling();
    }
});
