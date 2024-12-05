import {
  SkeletonDetailContainer,
  SkeletonDetailHeaderContainer,
  SkeletonDetailImage,
  SkeletonDetailSeparator,
  SkeletonDetailStat,
  SkeletonDetailStatsContainer,
  SkeletonDetailStatsTitle,
  SkeletonDetailTitle,
  SkeletonDetailType,
  SkeletonDetailTypesContainer,
} from '@/components/StyledComponents/StyledSkeletonDetail';

export function SkeletonDetailCard() {
  return (
    <SkeletonDetailContainer>
      <SkeletonDetailHeaderContainer>
        <SkeletonDetailTitle />
        <SkeletonDetailImage />
      </SkeletonDetailHeaderContainer>
      <SkeletonDetailStatsContainer>
        <SkeletonDetailStatsTitle />
        <SkeletonDetailSeparator />
        <SkeletonDetailTypesContainer>
          <SkeletonDetailType />
          <SkeletonDetailType />
        </SkeletonDetailTypesContainer>
        <SkeletonDetailStat />
        <SkeletonDetailStat />
        <SkeletonDetailStat />
        <SkeletonDetailStat />
        <SkeletonDetailStat />
        <SkeletonDetailStat />
        <SkeletonDetailStat />
      </SkeletonDetailStatsContainer>
    </SkeletonDetailContainer>
  );
}
