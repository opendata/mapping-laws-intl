function blueGreen(d) {
    return d == 1                  ? '#F0F9E8' :
           d == 2                  ? '#BAE4BC' :
           d == 3                  ? '#7BCCC4' :
           d == 4                  ? '#43A2CA' :
           d == 5                  ? '#0868AC' :
           d == 'border-highlight' ? '#444444' :
           d == 'border-standard'  ? '#F0F9E8' :
                                     '#F0F9E8' ;
}