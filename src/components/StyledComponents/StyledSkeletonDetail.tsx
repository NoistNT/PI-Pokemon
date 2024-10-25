import styled from 'styled-components'

import { SkeletonShimmer } from '@/helpers/helpers'

export const SkeletonDetailContainer = styled(SkeletonShimmer)`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 29rem;
  max-width: 65rem;
  padding: 1rem;
  margin: 1.5rem auto;
  border-style: solid;
  border-color: #ffffff36;
  border-radius: 0.85rem;
  box-shadow: 0 2px 4px var(--card-shadow);

  @media screen and (max-width: 1100px) {
    margin: 1.5rem 1rem;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 20rem;
    margin: 1rem auto;
    height: 46rem;
  }
`

export const SkeletonDetailHeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 1;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`

export const SkeletonDetailImage = styled(SkeletonShimmer)`
  width: 20rem;
  height: 20rem;
  border-radius: 0.5rem;
  margin: 1rem auto;
  @media screen and (max-width: 768px) {
    width: 15rem;
    height: 15rem;
  }
`

export const SkeletonDetailTitle = styled(SkeletonShimmer)`
  width: 12rem;
  height: 2rem;
  margin-top: 1rem;
  border-radius: 0.4rem;

  @media screen and (max-width: 768px) {
    place-self: center;
  }
`

export const SkeletonDetailSeparator = styled(SkeletonShimmer)`
  width: 95%;
  height: 1px;
  margin-top: 1rem;
  place-self: flex-start;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SkeletonDetailStatsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 1.5em;
  }
`

export const SkeletonDetailStatsTitle = styled(SkeletonShimmer)`
  width: 3rem;
  height: 1.5rem;
  margin-top: 1.6rem;
  border-radius: 0.3rem;
  place-self: flex-start;

  @media screen and (max-width: 768px) {
    display: none;
    height: 2.25rem;
  }
`

export const SkeletonDetailStat = styled(SkeletonDetailStatsTitle)`
  margin: 0.5rem 0;
  width: 95%;
  height: 2.5rem;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    height: 2.25rem;
  }
`

export const SkeletonDetailTypesContainer = styled(SkeletonDetailStat)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

export const SkeletonDetailType = styled(SkeletonShimmer)`
  width: 5.7rem;
  height: 1.8rem;
  border-radius: 0.3rem;
`
