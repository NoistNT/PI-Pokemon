import {
  SkeletonCardContainer,
  SkeletonImage,
  SkeletonName,
  SkeletonType,
  SkeletonTypesContainer,
} from '@/components/StyledComponents/StyledSkeletonCard';

export function SkeletonCard() {
  return (
    <SkeletonCardContainer>
      <SkeletonImage />
      <SkeletonName />
      <SkeletonTypesContainer>
        <SkeletonType />
        <SkeletonType />
      </SkeletonTypesContainer>
    </SkeletonCardContainer>
  );
}
