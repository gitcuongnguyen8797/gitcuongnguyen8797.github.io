import { View, Image, Text } from "@react-pdf/renderer";
import React from "react";
import userInfo from "data/user";
import styles from "../../styles/pdf/introduction.styles";

export default function Introduction() {
  return (
    <View style={styles.view}>
      <Image
        style={styles.bg}
        src={'/static/banner-bg.png'}
      />
      {/* left content */}
      <View style={styles.contentContainer}>
        <Text style={styles.primaryTitle}>
          {userInfo.description.primaryTitle}
        </Text>
        <Text style={styles.position}>
          <Text style={styles.positionColor}>Full-stack </Text>
          <Text style={styles.primaryTitle}>Developer</Text>
        </Text>

        <Text style={styles.content}>{userInfo.description.introduction}</Text>
      </View>
      {/* right content */}
      <View style={styles.imageContainer}>
        <Image src={'/static/banner-technologies.png'} style={{width: '125%'}} />
      </View>
    </View>
  );
}
