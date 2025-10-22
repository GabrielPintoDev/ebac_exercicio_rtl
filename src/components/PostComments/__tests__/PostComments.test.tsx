import { render, screen, fireEvent } from '@testing-library/react';
import Post from './..';

describe('Post component', () => {
    test('deve permitir inserir dois comentários e exibi-los na tela', () => {
        render(<Post />);

        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('comment-button');

        // Primeiro comentário
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        // Segundo comentário
        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        // Verifica se há dois comentários renderizados
        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);

        // Verifica o texto de cada comentário
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
    });
});
