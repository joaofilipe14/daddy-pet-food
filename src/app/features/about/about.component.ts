import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    imports: [RouterLink],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {

    pigs = [
        {
            name: 'Ambrósio',
            epithet: 'O primeiro a contar a sua história',
            text: 'É com ele que o blog começa.',
            photo: 'images/ambrosio-apresentacao.gif'
        },
        {
            name: 'Houdini',
            epithet: 'O mágico peludo',
            text: 'Vive separado dos outros, e vamos contar como estamos a lidar com isso.',
            photo: 'images/houdini-apresentacao.gif'
        },
        {
            name: 'Viriato',
            epithet: 'O forte português, rei da toca',
            text: 'Forte, português e, como o título diz, o rei da toca.',
            photo: 'images/viriato-apresentacao.gif'
        }
    ];

    values = [
        { title: 'Informação fiável', text: 'Clara, verificada e atualizada. Quando ainda não sabemos, dizemo-lo.' },
        { title: 'Bem-estar primeiro', text: 'Tudo parte de uma pergunta: isto é bom para o porquinho?' },
        { title: 'Para toda a gente', text: 'Para quem já tem porquinhos e para quem ainda está a decidir, sem julgamentos.' }
    ];
}
