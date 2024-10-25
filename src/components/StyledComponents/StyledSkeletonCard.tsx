import styled from 'styled-components'

import { SkeletonShimmer } from '@/helpers/helpers'

export const SkeletonCardContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
  height: 27.95rem;
  width: 17.8rem;
  border-style: solid;
  border-color: #ffffff36;
  border-radius: 0.85rem;
  background: linear-gradient(
    82.3deg,
    rgb(50, 39, 66) 0%,
    rgb(76, 71, 148) 100%
  );
  box-shadow: 0 2px 4px var(--card-shadow);
  transition: all 0.3s ease;
`

export const SkeletonImage = styled(SkeletonShimmer)`
  width: 17.8rem;
  height: 17.8rem;
  background-color: #44475a;
  border-radius: 0.5rem;
`

export const SkeletonName = styled(SkeletonShimmer)`
  width: 50%;
  background-color: #44475a;
  margin: 0 auto;
  margin-top: auto;
  padding: 0.87rem 0.5rem;
  border-radius: 0.4rem;
`

export const SkeletonTypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.4rem;
  gap: 0 1rem;
  padding-bottom: 0.8rem;
`

export const SkeletonType = styled(SkeletonShimmer)`
  padding: 1rem 2.8rem;
  background-color: #44475a;
  border-radius: 0.3rem;
`
