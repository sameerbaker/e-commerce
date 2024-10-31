import React from 'react';

const StarRating = ({ avgRating, starSize = 15, borderThickness = 2 }) => {
  const maxRating = 5; // Maximum rating
  const filledStars = Math.round(avgRating * maxRating) / maxRating; // Calculate filled stars

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(maxRating)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < filledStars ? '#FFD700' : 'none'}
          viewBox={`0 0 26 26`}
          height={starSize}
          width={starSize}
        >
          <path
            stroke={index < filledStars ? '#FFD700' : '#000'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={borderThickness}
            d="M11.27 4.411c.23-.52.346-.779.508-.859a.5.5 0 01.444 0c.161.08.277.34.508.86l1.845 4.136c.068.154.102.23.155.29a.5.5 0 00.168.121c.072.032.156.041.323.059l4.505.475c.565.06.848.09.974.218a.5.5 0 01.137.423c-.026.178-.237.368-.66.75l-3.364 3.031c-.125.113-.188.17-.227.238a.5.5 0 00-.064.197c-.009.079.009.161.044.326l.94 4.43c.117.557.176.835.093.994a.5.5 0 01-.36.261c-.177.03-.423-.111-.916-.396l-3.924-2.263c-.145-.084-.218-.126-.295-.142a.502.502 0 00-.208 0c-.078.017-.15.058-.296.142l-3.923 2.263c-.493.285-.74.427-.917.396a.5.5 0 01-.36-.26c-.083-.16-.024-.438.094-.995l.94-4.43c.035-.165.052-.247.044-.326a.5.5 0 00-.064-.197c-.04-.069-.102-.125-.227-.238l-3.365-3.032c-.422-.38-.633-.57-.66-.749a.5.5 0 01.138-.423c.126-.128.409-.158.974-.218l4.504-.475c.168-.018.251-.027.323-.059a.5.5 0 00.168-.122c.053-.059.088-.135.156-.289l1.844-4.137z"
          ></path>
        </svg>
      ))}
    </div>
  );
};

export default StarRating;