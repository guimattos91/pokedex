import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Header from 'components/Header'
import MainHome from 'components/MainHome'

import useTitle from 'hooks/useTitle'

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
