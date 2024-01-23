import { motion } from 'framer-motion'
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import Flex from '../common/Flex'
import { css } from '@emotion/react'
import Spacing from '../common/Spacing'
import { colors } from '@/styles/color'
import { typographyTable } from '@/styles/typography'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneNumberValue, setPhoneNumberValue] = useState('')
  const [messageValue, setMessageValue] = useState('')

  const {
    REACT_APP_SERVICE_ID = '',
    REACT_APP_TEMPLATE_ID = '',
    REACT_APP_PUBLIC = '',
  } = process.env

  const handleInputChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      setter(e.target.value)
    }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formRef.current) {
      emailjs
        .sendForm(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          formRef.current,
          REACT_APP_PUBLIC,
        )
        .then(
          (result) => {
            console.log(result)
            toast.success('이메일을 성공적으로 전송했습니다.')
            setNameValue('')
            setEmailValue('')
            setPhoneNumberValue('')
            setMessageValue('')
          },
          (error) => {
            console.error(error)
            toast.error('이메일 전송에 실패하였습니다.')
            setNameValue('')
            setEmailValue('')
            setPhoneNumberValue('')
            setMessageValue('')
          },
        )
    }
  }

  return (
    <Flex direction="column" width="50%" align="center">
      <motion.form
        css={fromStyles}
        ref={formRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onSubmit={sendEmail}
      >
        <input
          css={inputStyles}
          type="text"
          required
          placeholder="Name"
          name="name"
          value={nameValue}
          onChange={handleInputChange(setNameValue)}
        />

        <Spacing size={20} />

        <input
          css={inputStyles}
          type="email"
          required
          placeholder="Email"
          name="email"
          value={emailValue}
          onChange={handleInputChange(setEmailValue)}
        />

        <Spacing size={20} />

        <input
          css={inputStyles}
          type="tel"
          placeholder="Phone_Number"
          name="phone_number"
          value={phoneNumberValue}
          onChange={handleInputChange(setPhoneNumberValue)}
        />

        <Spacing size={32} />

        <textarea
          css={textareaStyles}
          rows={8}
          placeholder="Message"
          name="message"
          value={messageValue}
          onChange={handleInputChange(setMessageValue)}
        />

        <Spacing size={40} />

        <Flex justify="center" align="center">
          <button type="submit" css={buttonStlyes}>
            전송
          </button>
        </Flex>
      </motion.form>
    </Flex>
  )
}

const fromStyles = css`
  width: 100%;
`

const inputStyles = css`
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid;
  outline: none;
  ${typographyTable.t4};
  padding: 8px;

  &:focus {
    border-bottom: 2px solid ${colors.blue};
  }
`

const textareaStyles = css`
  display: block;
  width: 100%;
  ${typographyTable.t4};
  padding: 10px;
  resize: none;
  border-radius: 8px;
  border: 2px solid;
  outline: none;

  &:focus {
    border: 2px solid ${colors.blue};
  }
`

const buttonStlyes = css`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: ${colors.blue};
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.blue};
    border: 1px solid ${colors.blue};
  }
`

export default Contact
