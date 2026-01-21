import { fireEvent, render, screen } from "@testing-library/react"
import Post from ".."


describe('teste para ver se os comentários estão sendo renderizados', () => {
  test('Deve renderizar o primeiro comentário de maneira correta', () => {    
    render(<Post/>)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Muito Bonito o modelo onde comprou?'
      }      
    })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    expect(screen.getByText('Muito Bonito o modelo onde comprou?')).toBeInTheDocument()
  })
  test('Deve renderizar o segundo comentário de maneira correta', () => {    
    render(<Post/>)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Nossa me faz lembrar de quando era mais novo sempre gostei de batman'
      }      
    })
    fireEvent.click(screen.getByTestId('btn-comentar'))
    expect(screen.getByText('Nossa me faz lembrar de quando era mais novo sempre gostei de batman')).toBeInTheDocument()
  })
})