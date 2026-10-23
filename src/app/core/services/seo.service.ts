import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
    title: string;
    description: string;
    path: string;               // ex.: '/blog/1-ambrosio'
    image?: string;             // caminho no site, ex.: '/blog/1-ambrosio/hero.jpg'
    type?: 'website' | 'article';
    noindex?: boolean;
}

const SITE_URL = 'https://www.sombradastocas.pt';          // sem barra no fim
const SITE_NAME = 'A Sombra das Tocas';
const DEFAULT_IMAGE = '/assets/og-share-image.jpg';

@Injectable({ providedIn: 'root' })
export class SeoService {
    private titleService = inject(Title);
    private meta = inject(Meta);
    private doc = inject(DOCUMENT);

    update(data: SeoData) {
        const url = SITE_URL + data.path;
        const image = SITE_URL + (data.image ?? DEFAULT_IMAGE);
        const fullTitle = data.path === '/' ? data.title : `${data.title} | ${SITE_NAME}`;

        this.titleService.setTitle(fullTitle);
        this.meta.updateTag({ name: 'description', content: data.description });
        this.meta.updateTag({ name: 'robots', content: data.noindex ? 'noindex, nofollow' : 'index, follow' });

        this.meta.updateTag({ property: 'og:type', content: data.type ?? 'website' });
        this.meta.updateTag({ property: 'og:title', content: fullTitle });
        this.meta.updateTag({ property: 'og:description', content: data.description });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:image', content: image });

        this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
        this.meta.updateTag({ name: 'twitter:description', content: data.description });
        this.meta.updateTag({ name: 'twitter:image', content: image });

        this.setCanonical(url);
    }

    private setCanonical(url: string) {
        let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!link) {
            link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }
}
