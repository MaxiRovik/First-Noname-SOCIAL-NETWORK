import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png'

let Users = (props) => {
    let getUsers =() =>{
        if (props.users.length ===0 ) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });

            // props.setUsers( [
            //     {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_rYQSChWD3jvvHKTKTEcEC7XSmAPHw2mxw&usqp=CAU', followed: false, name: 'Gregory', status: "I am ok!",           location: {city: 'Kharkov',   country: 'Ukraine'}},
            //     {id: 2, photoUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWEhgWFRUYGBgZGhoYGBwcGBgcGRgYGBgZGRgYGBgcIS4lHCMrHxkZJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBESHjosJCs4MTQ0NDw0NDE1PzQ0MTQ/NDQ8PzE2NT89PTgxPTQxNDE2NjQ9PzQ0NDQ0Pz8+PTE/NP/AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xABGEAACAQIEAwYDBQYDAw0AAAABAgADEQQSITEFBkEiUWFxgZEHE6EyUnKxwSNCYoKS8BSy0TOi8RYkNERjZHSUo8LE0+H/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHREBAQEAAgIDAAAAAAAAAAAAAAERAjEhQQMSUf/aAAwDAQACEQMRAD8A7NERAREQEREBERAREQEREBERAREQERMXH1ctJ26hWI87afWBXCVMyk95uPI6iZMxMALLbusPYWmXAREQEsUTqw8T+cvzEptZ2HiPqAYGXERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEjOPtagR956a+9Rb/AEvJOQnMrdmiOjV0B9Fdv/bAkMIf1mXI/DvaSEBERASOL/tX8CP8imSMhc37Zz/F+SgfpAmFNxPUs0dpegIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICa7zc1hhv8AxKA+qOJsU1fnt8tKg3diaf8AleBJFrCeqWPYgKF1AsTfS/h3zHqPeyjdvoOpmVhaQUAd0C+gY/aP6CXRTEoDLggWXwwPh5aSwuFynv8APf3mdKwLaLbyl2IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICatz/AP8ARqZ7sRSPuSP1m0zUviU+Xh7N92pSb/1FH6wL2CxYdiy7bDyEl6DTUuV6magh71BmzYdtYEigl0CWqTS9AoRKCVM8A6wLkSkrAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQE1P4nUs3CcT/AAqj/wBFRGP0Bm2SC53p5uGYsf8Ad6p9qbH9IGi8gY/Nh0HddfbUTfsOb6zjPw9xh7aeCuPMWuPznWuF4oMp/vygTFJrTKDTBovcE6eu3rL1Kp09u8Hqp8YF52lpnsCT0nthLLi5C/zHyH/7aBk0zpPWbW0tUD2R/d+8+8No6+REC/ERAREQEREBERAREQEREBERAREQEREBERAREQEREBEwMVxXD0/t1UW3ewv7TCPNWC6VQfJWP6QJyYfFMN8yhVp/fpun9SFf1mFS5lwbOE+eiu2qqxylvLNa8mYHzHyRislZWOwFj6GxHsTOxcBrKGOotew8un0nH62HNLiGJo2y5K1TKP4c5yn2sfWVTnCth8S9gHQHKVLEDuJBGxsSIH0C907Vrod/I9J7wvZGVmzIT+zbqL7I3iNge6c4w/xZwbBc9KunQ/YZdd9Oo9Jk4vmdFT5+HcPScagC4/CyHUHw0PcekDpKVVuVJ7Q38uhmP84EMyi5Zgi+hsT5DU+k0DhXPBqVqYKaMtRdA2rABkALdey+mvnNl4HWq4imXWyJ8yoFPUAMQxI6G+b3gT9Gpmc2+ygy/wA3/C0g+b+bKGDFNGINSowCKCLhf3mbuHTxM1DnT4mUcPfDYILUddGqFmyKdbhSpBdu83AHj05PgaeKx+NUMz1KrsMzbsFG7HoABA+q6FQMqsNQQCPWXZg8OKqvy12pqqeoGv6TOgIiICIiAiIgIlIgViJj4rFU6a5qjqq7XY2F/EnQQMiJj0cXTb7Do34WU/kZkQERI7F8Yw1JwlWqqM32Q5y5vwk6H0gSMspXVr5SDYkGxGhG4MUq6MLqwYeBB/Kang6l2r090FRl/Fte/eNge/WBt2fw/Ker+EiMM5JuTJKm8A9UjZT59Ppc/SWXxJtpZT/ErkfW0zJWBh0Q51NQH8KgD63P1ms8b5XxWIftcQxC0utNAlMHwNRFzEeYPnNuakp3AltqH3WYeRuPYwOc1Ph1h6PbRHDDUutZ2J/EGIv5ZTIjEYQI9r2VjZSQQVJ2BvuDY2PpOuBXHUN5i31ExsVgUcEPT33Kn/Sxku+muOe3z9z/AEGCUyw+yzLfwIv+k98nfEjF4MhHJr0NsjntIP8As3Oo/Cbjy3nY8dyjgK6Gm9LTQ3uV112AI19Os0LmH4TUgwGGqMCb9liCB3Ene19ItztZx+1yVpPOfGqNfiL4rDMwWqtNiGXKysEVHUg3BPZvcEjXeWa3Aa1dPnUKfzARdiljfxyXup6Eay3xrk/HYYn5lFso/eAJXzvHKvMdTB1bi7Ix7a3t/Mt9mA99jEupeNnaxS5dxZvai7ehBHmDMGnVrUHIBZG2ZT18GU6H1nc+Dc1YaucrqGW2ZX0ysvkdVI6jpaSOP5ewOJQEUUa+zEagee8rLk3IXBq2NxKlnemitcOoXR/4cwI7/ebTznyXxTDowweIxFeg+tRM9mudzlWwYHqAPQ9N+4NwqnRKhFCgaAAWAm1jbWBw7k74U1qgFXFZaSHZMuaofE62Xy1nTMNwnBcPpMaVNUJGrWGdj0uf0mwV6yIhd2CKoJZiQFUDcknQTjnxB4xiXZGVm/wrXAqZMuY30y3N7eNh4d8DfuTuMpiKmICA5aTKpbo1R8zvbwHZA9fCbZOWfCnH06NCmjCzYqpUZf5R2b/yKPpOpwEREBERAREQEREBLVWkrKVZQykWIIBBB6EHeXYgahivhzwpzdcP8pvvUndCPRTb6SKrfD/F09cHxPEJ3LVJdfK4It7GdElCYHLq1bmjC7rTxSDqoVmt+HsN7AyHxHxPp1VNHH4FWF9VI2Ydcji4I85nfEDn4kth8M1lF1dwdX71U9F8evlvz7AVkLgVAGDHUMARbyMCYy4KpmfCYgUKhIyqGegF12GZivj9rp46bN/heLUlBo4ta62GlRVYbAmznNf6TnvMWBw61bUxk0Ba1yAzdoqF8BpYWkTw/imLoG9GpUT8OYA+a7H1gdX/AOWmNw+uKwRsNS6FwthuSwzpbrraTGB+IuBrAD5lSg3Q2DD9QfUTT+W+ZeMVWANLMNO2f2fqwIKn0UTZOY+H8IK5sUKSVCLsyHI5a2v2LFv5gYGz0OK4llzUMRhq6+IKn1KEj6CeH5sr0/8AbYN7fepMKg87AXHracG4li6VCrfB16xUbFwFYeTKRf2EmOFfEjF0yPmKlYfxCz/1rr73gdqwPPOAqafMKHazKRr5i4HvNgw2KRxdHVh3qwYfScew/OPDcYQtbDLnOmquHH4aqEkeuWTT8kdkVcHialIkZlR+0o02DrZl8zmgdOlLzkWI45xzAi9VPm013cWqJbvJFnHraZ3DPi3h2sK1Nk/iUgjzyta3uYHTiAZhtw9SWNyC1hobWAGwHv7yM4dzbgK4GTEJc9GbIx8AGtf0kyKw08dtQb+Wsliy2dIuvgajEIcrIou2Y9p2todBpY6+NrbTWePcnYau4z4dVvoWTS19mzKLixG3iJvrqCOo+koqaAX6fn1vJY3PkscK4t8OsThiamEYV0G6knML9QFILW9JB8M5yxeEdkZWYbFHZuz4jMLj3tO58V41w6g2XEYhA41ylg1QDYEhRm95ovMuK4BjUKnFClUF8rFCcp7zdRcHqMwvHmM28bOvK9yrz7RxDqjsEc7BiBc9wJ3nS6+PpU6RqVHVUVSWYmwAG8+X+OcvVMOSyulelfStSOZDfa9vsn+7yMfiFZkFNqtRqYNwhdigPeFJsD6TSWOl8a43iOMYnJSY08KjWpgg2qMNc9Qbb7A7dLm8nUxTYjhuJw2IUKyIzUz0JRTYp4XH1nNuF8aAIFCg6OouMjM4YDUhlIuNOom98y4rNwt3C5HT5dPS4JV+zsfST2tzMiM5UzHH8Ppg/wCyRnbwARUP1H1ndEqgzgHI2KLYys46BUU9wXQ287XnaOG4nQCVlNgyssU3l4GBWIiAiIgIiICIiAnNvinzb8mn/hqTftHHbI3VTsvmevh5zdeYOKphcM9Zv3RoPvMdFHvPmfivEHr1XqObs7FifEwMV6+tzLWHrkvfuB/KWMQ084Ru35gj6QJpqjs5e+pPhNu4NQw9NPmVays3RQym3sN5qGHeVx6plvYX8u+Bt2P5iqPdUJRPDcjzkbQwlWs1kRnJ62/MzE5f5LxGIsx7CHZj1/CJuA5ZoYHJV+dUuCMwzkBttlECPo8oNm/buqDe2UX/AM1/pNh4byvwwfuU3I6uD+ukjONc2ZriihtoLsSSbddZqP8AjsS1Ql6juCNr2G/SB0+rxfh2FHYRMw/dQCa5xX4j4lrihSCDozFWb2vaaZXrVbhVoO5Jtpm3/pkhw7lniNY6YbKvezFB+RP0gRHF+I4zEH9rUqsO64y/0qbTzwnlPE4g2RHA+8yMF97TpfBuV69GzNgqFRu9sU+np8gzaqWJ4gosuBw9u4Ytx/8AHgaTwP4TpcNiMQzd6oCo8i17zpvAuEYbCpkooV/qJ92JkQ2P4mP+o0P/ADbf/TA4nxPQf4PDC5Cj/nT7nyowNuNVZAYh2xbtTR3TD02yVHQlXrONGpU3GqKp0Zl1vdQRYzGrYXiFRbPWw2HvcMaa1KrgHS6M5QK3cSpt3GTGAFOmFpUwAlNQAPyv3nck9SbwMjAcPo0EyUqaINyFAFz1J7/MyuMwFGquWpTRwejKrfmJiVuJrnbqtMdq3VjrlHkBLmDxPZswJYEqzDYlWKgg+Nr28YEDxHkfC5mqUAaLMe2qgtSqK32hUo7NfwsfGcc5w5MfA1yzozYYt2GXUa/uMd1Pnv3z6QDG2xPjpLWLwdOouV0V1PRgCPYyLL+vn3g3NOHRqS0MLk+W2ZmUXd9Ct2boNep0mwfE7jiNhMhUpVZ0JW24XtXvsdRNl5lwNbA0s+HoCvRAOZQqh6Y6nKBZl8tR3EajjnNXMLY6srFcqr2VHXW1zEi27JGz/D7DFKWfq5J9NhOo8LxGk5/wIhaaqNgAPabjw55WW3YapM1HkLhaslKTwMuVnhWnuAiIgIiICIkfxviKYfD1KzbIpbzPQeptA5P8Y+YM9VcKh7NPtPbq7DQeg/OctJmXxHFPVqO7m7Oxdj4sbzBrNYQMao1zPNJrMD4ieSZ5gTdLS57tvOVZxY5tsr++Rsv+9aY9HEA6HwPncStQg6Ha+vl1gb2vOFRaSU6ShclNUzHfsqAZE1K9es2ZyzW112Ev8PwdP5IcWLC6uBqVZTY+9r+szBxFTTZAB2lI8j0PvaBOcL5TR1z1GGoBsL6XF5O4Pg+Ep2IQE33NidPMTSuC81lEyOdgB7aflaZmJ5nUqbMLgg79Dof0gb6cTSRgbADyXe3lL6cYp+Ptb6bzm+P4zmoo4O9j+YkYvH7bmB1erx6mu0wavM9tiBOW4nmXuMiq3Hj3mB0/Fcyv98m58NPKwExafMOVkYt+/r5ZT+s5a/FKj/Zv+nqTpKHEuD2qi+ABJN+mtrfWB1/E82BSAD0H5TDw3OKqjuzdWbfoosB/u/Wc9Hy3v8zFAHYBEd9PG+QfWQ2McKWWmzMg0BYAEiwuSoJtrfqYHS+Hc1umGR2Pbf5lU22VndEpi/grBvMTaeCcxiyowt5bEeE4dgsSxGXNoMuh22sdPMD6SZwfGqtO1zddNO7ToYH0ZR4gtgb3B6jX37pnKwO043y/zafsk3TqDvN74dxin8stTIdRqRe7oe4jqIG1MoO8ganK2Dzs4w1IO18zhFzG++Yga3/4yQ4fjVqKGDXuAelte6Z95LFlxy/jXK74fNUpDsDVk9TmKHppY5fO3SeuF1bgEag7eU6LjMOXUgGxItsCNfAzmnCjkrmgyuSHKEHTI9i4Fx+6y6i+22ukk8XHS5y47O42vCPJahUmFhsNl3SZ9NE8ppyZaPLwMxlp+MuIIF+JQSsCkRECs5N8aePZVp4RDq3bfyH2QfznUcbikpU3qObKilmPgBefMnMfFWxOJes27tceC/uj2gRgEw8QZnNtI7EHWBZMpKmUgXGO3l+RM9riD11lo7D1nmBIYXiT0zdWKna4sbjuYHQie6nEqja+O40F5GT0rEbG0CQNQkeM9UrjW8jhUPfLyYg+HsIE7Sx6mlkJ2vbyMiixIvf+/Ww+sxXc7yybwMp2T7xPqP8AQ/nPHzlGy+p1+huJZUSkC9UxLtuT/fdLPjKSpMC/RqgHWUrkZie//SWdJUL4iB7oNZgZMobjXrIKxk5ge0gMC5SpBTcE6beBk1wbHulQEuUJ0ZhsQdNR4XkIykG1yevTb2nqlWsNf7/0gbzgOcaqMA4sRbMV+zfY29bze+F88UXZaZYFyL91hpqfcTiijMSSdb/n1kfiajpULhjdRp7wPqxHBAINwesj+IcIp1HFS1nW1mG5ynMt++x7+8zSPh5zktZMjnwA+7tofedHVr7bWuJLNWWzzEbgcSzU1ZkKMQCyNYlT1Ukb2MyxlPSxnitSJJIGo1I6MD1894pMCJUXcncZUAzyCRKh4F5bz3eW1cT0TA9XieYgcz+MHHslIYRD2qlmqW6IPsqfM/QTjKIdzEQDGRtY6xEC1ERA9fu+s8xEBERAREQPWY988xEC4BoJ4MRApERAGLREAJOcCe4K9Qb+hiIEnXoAi/XpMApsdrXvEQKI5Db7/pMbiJJGmsRAu4PFimuai5pvbUE2DDun0jyhxdcThKdUG5Ki/nYAj3iIEjjMQVqUwBfPnW3XRC+nj2frPAUgn3HkdoiBeV4uIiBcW0uAxECuaIiB/9k=', followed: true, name: 'Max',      status: "I am studying now",  location: {city: 'Energodar', country: 'Ukraine'}},
            //     {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWu9LJnCTJ9ugNa4DRuLMnoxsXPu-FMaqYCg&usqp=CAU', followed: false, name: 'Daniel',  status: "With everything",    location: {city: 'Dnipro',    country: 'Ukraine'}},
            //     {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBXQsr3yz5LE_tJ1n1K_aNifnoacTqDgpzQ&usqp=CAU', followed: false, name: 'Andrew',  status: "Without anything",   location: {city: 'Minsk',     country: 'Belarus'}}
            // ])
        }

    };

    return (
      <div className = {classes.usersBlock}>
          <button onClick={getUsers}>Get Users</button>
            {props.users.map( e =>(
                <div key ={e.id} className = {classes.usersContainer}>
                    <div>
                        <div>
                            <img className = {classes.img} src={e.photos.small != null ? e.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {e.followed
                                ? <button onClick ={() => {props.unFollow(e.id)}} className = {classes.buttonFollowed}>
                                    Follow
                                </button>
                                : <button onClick ={() => {props.follow(e.id)}} className = {classes.buttonUnfollowed}>
                                    Unfollow
                                </button>}
                        </div>
                    </div>
                    <div className = {classes.usersInfo}>
                        <div className = {classes.usersNameAndStatus}>
                            <div className = {classes.name}>
                                {e.name}
                            </div>
                            <div>
                                {e.status}
                            </div>

                        </div>
                        <div>
                            <div>
                                {"e.location.city"}
                            </div>
                            <div>
                                {"e.location.country"}
                            </div>
                        </div>
                    </div>
                </div>
            ) )}
      </div>


    )
}
export default Users;