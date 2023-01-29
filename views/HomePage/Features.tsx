import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Çeşitli Sunucu Lokasyonları.',
    description:
      '4 sunucu lokasyonu ile sizlere hizmet sağlıyoruz. Sipariş verin ve kullanmaya başlayın',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Reklam Kazancı.',
    description:
      'Kazancımızı reklamlardan sağlıyoruz. O yüzden herhangi bir ek ücret yok',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Kolay Kontrol Paneli.',
    description:
      'Kullanım paneline hemen erişim sağlayın. Gerektiğinide hizmeti durdurun devam ettirin',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
