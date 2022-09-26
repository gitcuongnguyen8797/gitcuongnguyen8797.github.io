import Header from "@/components/Header";
import i18n from "languages";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";


export const getStaticProps = async (context) => ({props: {context}})

export default function Home({context}) {
    const { locale } = context 
    useEffect(() => {
        i18n.changeLanguage(locale)
    }, [])

    return (
        <Header locale={locale} />
    )
}