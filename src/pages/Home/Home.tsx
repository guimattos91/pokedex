import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Config from 'Config'

import LanguageSwitcher from 'components/LanguageSwitcher'
import { Container, Row, Col } from 'react-bootstrap'

import useTitle from 'hooks/useTitle'
import { Link } from 'react-router-dom'
import Header from 'components/Header'
import MainHome from 'components/MainHome'
import LoadingPageComponent from 'components/LoadingPageComponent'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <MainHome />
    </>
  )
}

export default memo(Home)
