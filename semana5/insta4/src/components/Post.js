import React from 'react'
import styled from 'styled-components'

import { SecaoComentario } from './SecaoComentario'
import { IconeComContador } from './IconeComContador'
import { IconeSemContador } from './IconeSemContador'
import { SecaoCompartilhamento } from './SecaoCompartilhamento'

import iconeCoracaoBranco from '../img/favorite-white.svg'
import iconeCoracaoPreto from '../img/favorite.svg'
import iconeComentario from '../img/comment_icon.svg'
import iconeBookmarkBorder from '../img/bookmark-border.svg'
import iconeBookmark from '../img/bookmark.svg'
import iconeEnviar from '../img/send.svg'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 20px;
  &:nth-child(1) {
    margin-top: 20px;
  }
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
  
  div > div {
    margin-right: 10px;
  }
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    if (this.state.curtido) {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = (event, mensagem) => {
    this.setState({
      compartilhando: false
    })
    const redeSocial = event.target.id
    console.log(`Post compartilhado no ${redeSocial} com a seguinte mensagem: ${mensagem}`)
  }

  onClickBookmark = () => {
    if (this.state.salvo) {
      this.setState({
        salvo: false,
      })
    } else {
      this.setState({
        salvo: true,
      })
    }
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvo

    if(this.state.salvo) {
      iconeSalvo = iconeBookmark
    } else {
      iconeSalvo = iconeBookmarkBorder
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhamento

    if (this.state.compartilhando) {
      componenteCompartilhamento = <SecaoCompartilhamento aoCompartilhar={this.aoCompartilhar} />
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

        <PostFooter>
          <div>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />

            <IconeSemContador
              icone={iconeEnviar}
              onClickIcone={this.onClickCompartilhar}
            />
          </div>

          <div>
            <IconeSemContador
              icone={iconeSalvo}
              onClickIcone={this.onClickBookmark}
            />
          </div>
        </PostFooter>
        {componenteComentario}
        {componenteCompartilhamento}
    </PostContainer>
    )
  }
}
 

export default Post