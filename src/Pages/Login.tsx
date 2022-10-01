import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/features/user'
import { useAppDispatch } from '../redux/hooks/hooks'

import Logo from '../assets/logoWallet.svg'

function Login (): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [disabled, setDisabled] = useState(true)

  const verifyEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email)

  useEffect(() => {
    const magicNumber = 5
    if (verifyEmail(email) && senha.length > magicNumber) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [senha, email])

  const handleClick = (): void => {
    dispatch(login({ email, password: senha }))
    setEmail('')
    setSenha('')
    navigate('/carteira')
  }

  return (
        <div className="w-full h-[100vh] flex items-center justify-center ">
            <div
                className="
                mx-auto
                w-[525px]
                h-96
                bg-white
                rounded
                shadow-2xl
                flex
                flex-col
                items-center
                pt-16
                "
            >
                <img src={Logo} alt="Logo Trybe Wallet" />

                <form>
                    <div className="mt-10">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            data-testid="email-input"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="block
                            border
                            rounded
                            w-72
                            border-solid
                            border-[#003BE5]
                            p-2
                            placeholder:text-[#003BE5]
                            focus:outline-none
                            "
                        />
                    </div>
                    <div className="mt-6">
                        <input
                            type="password"
                            name="senha"
                            value={senha}
                            data-testid="password-input"
                            onChange={(e) => setSenha(e.target.value)}
                            className="block
                            border
                            rounded
                            w-72
                            border-solid
                            border-[#003BE5]
                            p-2
                            placeholder:text-[#003BE5]
                            focus:outline-none
                             "
                            placeholder="Senha"
                        />
                    </div>

                    <button
                        type="button"
                        disabled={disabled}
                        onClick={handleClick}
                        className={`
                        ${disabled ? 'bg-[#092169]' : 'bg-[#003be5]'}
                         mt-4
                        text-white
                        rounded
                        w-72
                        p-2
                        `}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Login
