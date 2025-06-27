'use client';

import PageTitle from "@/app/components/home/PageTitle";
import Container from 'react-bootstrap/Container';
import {Articles} from "@/app/components/home/Articles";

export default function NewsPage() {
  return (
    <div>
      <PageTitle title="Resources" />
      <Container>

        <Articles/>
      </Container>
    </div>
  );
}