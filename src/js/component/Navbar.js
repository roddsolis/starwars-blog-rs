import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar">
      <svg width="170" height="56" viewBox="0 0 170 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32.3619 39.6789L34.6622 46.4343C35.9069 50.0873 37.018 53.0088 37.1629 53.0088C37.1653 53.0088 37.1674 53.0077 37.1693 53.0061C37.3285 52.8655 41.831 39.7901 41.831 39.7901H50.5575L40.0295 70.4666H33.9642C33.9642 70.4666 27.4902 51.7689 27.5168 51.6978L20.759 70.231H14.7547L4.35926 39.6789L13.0433 39.6845C13.0433 39.6845 17.8003 53.1685 17.8637 53.1685L17.8643 53.168L22.6109 39.6786H32.3619M1.39453 37.5544L2.34996 40.3626L12.7454 70.9145L13.2349 72.3536H14.7549H20.7592H22.2445L22.7534 70.958L27.4457 58.0897C27.85 59.2662 28.287 60.5342 28.724 61.8011C30.3396 66.4854 31.9586 71.1609 31.9586 71.1609L32.4531 72.5892H33.9644H40.0297H41.5453L42.0372 71.1556L52.5652 40.4794L53.5302 37.6675H50.5575H41.831H40.3171L39.8241 39.0992C39.035 41.3902 37.9878 44.4139 37.0923 46.9729C36.9573 46.5848 36.8167 46.1767 36.6713 45.7495L34.3712 38.9944L33.8814 37.556H32.3619H22.6112H21.1079L20.6088 38.9742L17.8354 46.8559C16.9192 44.2807 15.8571 41.2796 15.0452 38.9782L14.5459 37.5629L13.0449 37.5619L4.36086 37.5563L1.39453 37.5544Z"
          fill="#FFE81F"
        />
        <path
          d="M166.759 39.5597L166.739 47.6004C166.739 47.6004 158.078 47.5715 153.675 47.5715C152.21 47.5715 151.216 47.5749 151.169 47.5834C150.41 47.7216 149.927 49.3351 150.142 50.0432C150.248 50.4014 151.042 51.5715 151.902 52.6461C152.758 53.7209 154.167 55.48 155.027 56.554C157.234 59.3083 157.537 59.852 157.741 61.4336C158.073 64.0022 156.858 66.7825 154.603 68.6159C152.342 70.4546 152.441 70.4676 135.663 70.4676C135.42 70.4676 135.176 70.4676 134.926 70.4676C124.722 70.465 119.325 70.3803 118.539 70.2052C117.144 69.8895 114.92 68.0747 109.043 62.4365C106.93 60.4105 104.982 58.6365 104.882 58.636C104.879 58.636 104.878 58.6376 104.878 58.6403L104.808 70.4682L95.2834 70.426L95.2248 39.919H107.236H116.467C122.869 40.1501 127.202 46.5282 126.34 50.5956C126.143 51.5187 125.645 52.8565 125.23 53.5673C124.379 55.0265 122.211 56.8997 120.452 57.7039C119.802 57.9979 119.271 58.3402 119.271 58.4622C119.271 58.9159 121.41 61.0223 122.211 61.3569C122.895 61.6432 124.888 61.7069 133.676 61.7069C134.706 61.7069 135.641 61.7074 136.49 61.7074C145.324 61.7074 144.879 61.6437 145.562 60.1842C146.039 59.168 145.676 58.5604 142.314 54.7742C138.056 50.5367 138.502 48.507 138.472 47.0079C138.412 45.2117 139.826 39.5605 147.178 39.5605L166.759 39.5597ZM109.696 53.6538C113.774 53.6538 114.602 53.5903 115.47 53.2133C118.399 51.9398 118.555 48.1777 115.746 46.5083C115.13 46.1419 114.339 46.0814 109.919 46.0573L104.804 46.0305C104.846 46.0703 104.788 53.3454 104.788 53.3454C104.788 53.3454 106.069 53.6538 109.696 53.6538ZM168.887 37.4371H166.759H147.178C142.924 37.4371 140.408 39.1161 139.047 40.5247C136.832 42.8153 136.31 45.6996 136.35 47.0594C136.352 47.1727 136.351 47.2889 136.35 47.4101C136.33 49.62 136.656 52.1218 140.77 56.2311C141.583 57.147 142.944 58.6824 143.458 59.4455C142.333 59.5838 139.483 59.5838 136.49 59.5838H135.218L133.675 59.5832C128.394 59.5832 123.941 59.5681 123.028 59.3879C122.901 59.3046 122.722 59.1614 122.525 58.9905C124.349 57.8668 126.194 56.1252 127.063 54.636C127.59 53.7304 128.171 52.1836 128.416 51.0361C128.957 48.4823 128.064 45.4016 126.027 42.793C123.651 39.7494 120.194 37.9285 116.543 37.7969L116.505 37.7953H116.466H107.236H95.224H93.0972L93.1014 39.9224L93.16 70.4292L93.1643 72.5382L95.2734 72.5475L104.798 72.5897L106.918 72.599L106.93 70.4796L106.971 63.3938C107.166 63.5785 107.367 63.7703 107.573 63.9682C114.001 70.1344 116.159 71.8428 118.07 72.275C118.595 72.392 119.464 72.586 134.924 72.5902H135.662C144.031 72.5902 148.233 72.5902 150.732 72.3488C153.594 72.072 154.515 71.4228 155.895 70.2991L155.941 70.2617C158.776 67.9569 160.272 64.4697 159.845 61.1611C159.567 59.0093 158.998 58.1154 156.682 55.2263L155.994 54.3667C155.187 53.3587 154.213 52.1414 153.56 51.3221C153.033 50.663 152.619 50.078 152.369 49.6949C152.697 49.6941 153.123 49.6935 153.674 49.6935C158.024 49.6935 166.645 49.7222 166.731 49.7227L168.856 49.7296L168.861 47.6049L168.881 39.564L168.887 37.4371ZM106.923 51.4537C106.927 50.9175 106.93 50.3162 106.934 49.714C106.936 49.1833 106.939 48.6516 106.939 48.1645L109.908 48.1798C111.613 48.1891 114.18 48.2032 114.681 48.3451C115.319 48.7328 115.675 49.3322 115.637 49.953C115.616 50.2884 115.456 50.905 114.623 51.2666C114.159 51.4683 113.418 51.5312 109.696 51.5312C108.515 51.5312 107.604 51.4969 106.923 51.4537Z"
          fill="#FFE81F"
        />
        <path
          d="M75.9255 39.4347L86.6154 70.1911L77.9048 70.2309L76.4588 65.6116L60.8842 65.4866L59.5099 70.1115L50.8868 70.021L61.4414 39.448L75.9255 39.4347ZM68.9206 43.9442C68.8986 44.0325 67.5558 47.7168 66.2085 51.4008C64.85 55.1154 63.4871 58.8299 63.4682 58.8588C63.4682 58.8591 63.468 58.8591 63.4682 58.8591C63.4682 58.8591 63.4682 58.8591 63.4682 58.8588C63.5043 58.8482 68.3279 58.8376 71.4195 58.8376C72.8663 58.8376 73.9334 58.84 73.9533 58.8453C73.9536 58.8464 73.9536 58.8466 73.9536 58.8466C73.9536 58.8466 73.9536 58.8464 73.9536 58.8458C73.9536 58.8458 73.9536 58.8458 73.9533 58.8453C73.8992 58.705 68.9363 44.1235 68.9206 43.9442C68.9209 43.9431 68.9209 43.9426 68.9209 43.9426C68.9206 43.9426 68.9206 43.9431 68.9206 43.9442ZM77.4344 37.3108L75.9239 37.3121L61.4398 37.3256L59.9285 37.327L59.4353 38.756L48.8807 69.3291L47.9194 72.1134L50.8651 72.1439L59.4881 72.2344L61.0888 72.2511L61.5449 70.717L62.4645 67.6228L74.896 67.7223L75.8798 70.8658L76.3481 72.3617L77.9154 72.3548L86.6257 72.315L89.596 72.3012L88.6207 69.4957L77.9308 38.7393L77.4344 37.3108ZM66.5234 56.7171C66.9254 55.6216 67.4669 54.1408 68.2022 52.13C68.4327 51.4995 68.6436 50.9225 68.8371 50.3934C69.013 50.9124 69.2045 51.477 69.4126 52.0909C69.584 52.5967 70.3372 54.8158 70.9833 56.715C69.0623 56.715 67.6163 56.7153 66.5234 56.7171Z"
          fill="#FFE81F"
        />
        <path
          d="M79.5283 2.72478V10.3131H64.3305V33.521H55.2697V10.2945L37.5301 10.3449C35.3916 10.3449 35.105 12.0483 35.105 12.701C35.105 13.5022 35.6277 14.3035 38.4985 17.9385C40.3611 20.2999 42.0724 22.6559 42.298 23.1707C43.5291 26.0043 41.9371 30.4193 39.0371 32.2129C36.9702 33.4899 37.3234 33.5212 21.9746 33.5212C21.1856 33.5212 20.3572 33.5212 19.4827 33.5212H2.96097V24.9964H28.9362L29.703 24.4631C30.2204 24.1022 30.5202 23.6061 30.6343 22.9268C30.7935 21.9504 30.7112 21.8231 27.5035 18.2094C23.712 13.9376 23.3113 13.1576 23.5077 10.4301C23.7306 7.31781 26.5058 2.79668 31.356 2.79668L79.5283 2.72478ZM81.6509 0.598999L79.5248 0.602183L31.3525 0.67382C28.5778 0.67382 26.0007 1.87255 24.098 4.04928C22.5554 5.81421 21.543 8.14297 21.3901 10.2783C21.132 13.8631 21.9571 15.1584 25.9155 19.6182C27.0644 20.9122 28.1567 22.1431 28.5213 22.6658C28.5154 22.6867 28.5101 22.7002 28.5069 22.7079C28.5029 22.7111 28.4968 22.7159 28.4884 22.7217L28.2703 22.8735H2.96097H0.838379V24.9961V33.521V35.6436H2.96097H19.4827H20.7926H21.9746C29.5422 35.6436 33.2775 35.6364 35.4781 35.4751C37.996 35.2907 38.7994 34.8587 40.0029 34.1113L40.1531 34.0182C43.9371 31.6778 45.8873 26.1044 44.2449 22.3243C43.7381 21.168 40.5296 17.0852 40.1653 16.6235C39.1581 15.3481 37.4956 13.2433 37.2324 12.6341C37.2387 12.5829 37.2512 12.5298 37.2645 12.493C37.3083 12.4818 37.3921 12.467 37.5301 12.467L53.1471 12.4226V33.5204V35.643H55.2697H64.3305H66.4531V33.5204V12.4351H79.5283H81.6509V10.3125V2.72425V0.598999Z"
          fill="#FFE81F"
        />
        <path
          d="M104.219 2.97123L114.88 33.8072L106.185 33.7595L104.774 29.1402L89.2686 29.0712L87.8834 33.5207H79.0298L89.5735 2.97123H104.219ZM91.7993 22.5047L102.359 22.4914C102.36 22.4914 102.36 22.4917 102.36 22.4917C102.396 22.4917 97.2278 7.31485 97.1933 7.30424C97.1556 7.30291 91.6802 22.5047 91.7993 22.5047ZM105.731 0.848633H104.219H89.5735H88.0609L87.5674 2.27873L77.0234 32.8284L76.0518 35.6435H79.03H87.8839H89.4464L89.9107 34.1516L90.829 31.2009L103.202 31.2559L104.156 34.3798L104.613 35.8733L106.175 35.8821L114.87 35.9298L117.867 35.9463L116.888 33.1137L106.227 2.27767L105.731 0.848633ZM94.7481 20.3784C95.4029 18.5139 96.3146 15.9589 97.1397 13.6625C97.9219 15.9559 98.7871 18.5033 99.4183 20.3725L94.7481 20.3784Z"
          fill="#FFE81F"
        />
        <path
          d="M134.161 2.97135C141.038 2.97135 145.811 3.06952 146.729 3.22871C148.852 3.59751 150.77 4.73045 152.208 6.47098C153.713 8.2911 154.058 9.16136 154.254 11.6554C154.535 15.1763 152.861 18.2142 149.558 20.1856C148.595 20.7613 147.605 21.3212 147.358 21.4326C146.979 21.6051 147.029 21.7696 147.708 22.5655C148.146 23.0776 148.905 23.8073 149.393 24.1867L150.285 24.8792L166.756 25.1153L166.918 33.5208H156.819C149.008 33.5208 146.509 33.4491 145.776 33.2024C144.68 32.8309 142.043 30.5969 136.683 25.4974L132.857 21.8571L132.898 33.5208H123.069V2.97135H134.161ZM132.713 16.7072H137.932C143.011 16.7072 143.169 16.6913 143.894 16.1474C145.189 15.1763 145.647 14.176 145.51 12.6398C145.369 11.0558 144.759 10.2306 143.228 9.56731C142.366 9.19055 141.535 9.12953 137.465 9.12953H132.713V16.7072ZM134.161 0.848755H123.07H120.948V2.97135V33.5208V35.6434H123.07H132.899H135.029L135.021 33.5134L134.998 26.8229L135.221 27.0349C141.85 33.3425 143.806 34.7752 145.096 35.2125C146.086 35.5465 147.744 35.6434 156.82 35.6434H166.918H169.082L169.04 33.4799L168.879 25.0745L168.84 23.0224L166.788 22.993L151.027 22.7672L150.696 22.5106C150.591 22.4286 150.464 22.3204 150.328 22.1978C150.446 22.1278 150.554 22.0633 150.648 22.0076C154.629 19.6321 156.715 15.7971 156.371 11.4867C156.142 8.57898 155.623 7.26907 153.845 5.11888C152.098 3.00451 149.7 1.5906 147.093 1.13769C145.645 0.88643 138.369 0.848755 134.161 0.848755ZM134.835 11.2521H137.465C141.186 11.2521 141.924 11.3139 142.378 11.5124C143.24 11.886 143.328 12.0672 143.396 12.8276C143.463 13.5833 143.37 13.8873 142.62 14.4493C142.596 14.4676 142.577 14.4819 142.561 14.4933C142.066 14.5849 140.23 14.5849 137.932 14.5849H134.836L134.835 11.2521Z"
          fill="#FFE81F"
        />
      </svg>
      <div className="dropend">
        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites {store.favorites.length}
        </button>
        <ul className="dropdown-menu mx-auto">
          {store.favorites.map((favorite, index) => {
            return (
              <li style={{ color: "rgb(255, 179, 0" }} key={index}>
                <h2>
                  {favorite}
                  <box-icon type="solid" class="bx-lg  bx-tada-hover" color="orange" name="trash-alt" onClick={() => handleDelete(index)}></box-icon>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
